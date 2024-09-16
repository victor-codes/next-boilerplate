export const cx = (
  ...inputs: (
    | string
    | undefined
    | null
    | false
    | Record<string, boolean | undefined>
  )[]
): string => {
  const classes: string[] = [];

  for (const input of inputs) {
    if (typeof input === "string") {
      classes.push(input);
    } else if (typeof input === "object" && input !== null) {
      for (const [key, value] of Object.entries(input)) {
        if (value) {
          classes.push(key);
        }
      }
    }
  }

  // Simple function to merge classes and remove duplicates
  const mergeClasses = (classList: string[]): string => {
    const uniqueClasses = new Set(
      classList.join(" ").split(" ").filter(Boolean)
    );
    return Array.from(uniqueClasses).join(" ");
  };

  return mergeClasses(classes);
};
