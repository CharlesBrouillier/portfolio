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
          class: 'hover:bg-[var(--color-customA2)] bg-[var(--color-customA3)] disabled:bg-[var(--color-customA2)] hover:bg-[var(--color-customA2)] focus-visible:outline-[var(--color-customA2)]',
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
            dot: 'bg-[var(--color-customA2)]',
          },
        },
      },
    },
    toast: {
      slots: {
        root: 'ring-1 ring-black opacity-90',
        icon: 'bg-[var(--color-customA2)]',
      },
      variants: {
        color: {
          primary: {
            progress: 'bg-[var(--color-customA2)]',
          },
        },
      },
    },
  },
});