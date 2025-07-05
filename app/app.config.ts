export default defineAppConfig({
  css: ['@/assets/styles/variables.css'],
  ui: {
    button: {
      slots: {
        base: ['hover:cursor-pointer'],
      },
      compoundVariants: [
        {
          color: 'primary',
          class: 'hover:bg-[var(--color-custom-200)] bg-[var(--color-custom-100)] disabled:bg-[var(--color-custom-200)] hover:bg-[var(--color-custom-200)] focus-visible:outline-[var(--color-custom-200)]',
        },
      ],
    },
    carousel: {
      slots: {
        prev: 'absolute rounded-full cursor-pointer invisible md:visible',
        next: 'absolute rounded-full cursor-pointer invisible md:visible',
        dots: 'mb-11',
        dot: ['w-8 h-4'],
      },
      variants: {
        active: {
          true: {
            dot: 'bg-[var(--color-custom-200)]',
          },
        },
      },
    },
    toast: {
      slots: {
        root: 'ring-1 ring-black opacity-90',
        icon: 'bg-[var(--color-custom-200)]',
      },
      variants: {
        color: {
          primary: {
            progress: 'bg-[var(--color-custom-200)]',
          },
        },
      },
    },
  },
});