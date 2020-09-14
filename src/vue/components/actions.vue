<template>
  <div ref="elRef" :class="classes">
    <slot />
  </div>
</template>
<script>
import { computed, ref, watch, onMounted, onBeforeUnmount } from 'vue';
import { classNames } from '../shared/utils';
import { colorClasses, colorProps } from '../shared/mixins';
import { f7ready, f7 } from '../shared/f7';
import { modalStateClasses } from '../shared/modal-state-classes';

export default {
  name: 'f7-actions',
  props: {
    tabletFullscreen: Boolean,
    opened: Boolean,
    animate: {
      type: Boolean,
      default: undefined,
    },
    grid: Boolean,
    target: {
      type: [String, Object],
      default: undefined,
    },
    convertToPopover: {
      type: Boolean,
      default: undefined,
    },
    forceToPopover: {
      type: Boolean,
      default: undefined,
    },
    backdrop: {
      type: Boolean,
      default: undefined,
    },
    backdropEl: {
      type: [String, Object],
      default: undefined,
    },
    closeByBackdropClick: {
      type: Boolean,
      default: undefined,
    },
    closeByOutsideClick: {
      type: Boolean,
      default: undefined,
    },
    closeOnEscape: {
      type: Boolean,
      default: undefined,
    },
    ...colorProps,
  },
  emits: ['actions:open', 'actions:opened', 'actions:close', 'actions:closed', 'update:opened'],
  setup(props, { emit }) {
    const f7Actions = ref(null);
    const isOpened = ref(props.opened);
    const isClosing = ref(false);
    const elRef = ref(null);

    const onOpen = (instance) => {
      isOpened.value = true;
      isClosing.value = false;
      emit('actions:open', instance);
      emit('update:opened', true);
    };
    const onOpened = (instance) => {
      emit('actions:opened', instance);
    };
    const onClose = (instance) => {
      isOpened.value = false;
      isClosing.value = true;
      emit('actions:close', instance);
    };
    const onClosed = (instance) => {
      isClosing.value = false;
      emit('actions:closed', instance);
      emit('update:opened', false);
    };
    const open = (anim) => {
      if (!f7Actions.value) return undefined;
      return f7Actions.value.open(anim);
    };
    const close = (anim) => {
      if (!f7Actions.value) return undefined;
      return f7Actions.value.close(anim);
    };

    watch(
      () => props.opened,
      (value) => {
        if (!f7Actions.value) return;
        if (value) {
          f7Actions.value.open();
        } else {
          f7Actions.value.close();
        }
      },
    );

    onMounted(() => {
      if (!elRef.value) return;
      const {
        target,
        convertToPopover,
        forceToPopover,
        closeByBackdropClick,
        closeByOutsideClick,
        closeOnEscape,
        backdrop,
        backdropEl,
        grid,
      } = props;

      const params = {
        el: elRef.value,
        grid,
        on: {
          open: onOpen,
          opened: onOpened,
          close: onClose,
          closed: onClosed,
        },
      };
      if (typeof target !== 'undefined') params.target = target;
      if (typeof convertToPopover !== 'undefined') params.convertToPopover = convertToPopover;
      if (typeof forceToPopover !== 'undefined') params.forceToPopover = forceToPopover;
      if (typeof closeByBackdropClick !== 'undefined')
        params.closeByBackdropClick = closeByBackdropClick;
      if (typeof closeByOutsideClick !== 'undefined')
        params.closeByOutsideClick = closeByOutsideClick;
      if (typeof closeOnEscape !== 'undefined') params.closeOnEscape = closeOnEscape;
      if (typeof backdrop !== 'undefined') params.backdrop = backdrop;
      if (typeof backdropEl !== 'undefined') params.backdropEl = backdropEl;

      f7ready(() => {
        f7Actions.value = f7.popup.create(params);
        if (props.opened) {
          f7Actions.value.open(false);
        }
      });
    });

    onBeforeUnmount(() => {
      if (f7Actions.value) {
        f7Actions.value.destroy();
      }
      f7Actions.value = null;
    });

    const classes = computed(() =>
      classNames(
        'actions-modal',
        {
          'actions-grid': props.grid,
        },
        modalStateClasses({ isOpened, isClosing }),
        colorClasses(props),
      ),
    );

    return {
      open,
      close,
      elRef,
      classes,
    };
  },
};
</script>