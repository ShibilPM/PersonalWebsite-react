export const pageAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      duration: 1,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    transition: { ease: "easeOut", duration: 0.5 },
  },
};

export const titleAnimation = {
  hidden: { x: 200, opacity: 0 },
  show: {
    x: 0,
    transition: { type: "tween", ease: "easeOut", duration: 0.75 },
    opacity: 1,
  },
};

export const line90Animation = {
  hidden: { width: "0%" },
  show: {
    width: "90%",
    transition: { duration: 2 },
  },
};

export const line80Animation = {
  hidden: { width: "0%" },
  show: {
    width: "80%",
    transition: { duration: 2 },
  },
};

export const line70Animation = {
  hidden: { width: "0%" },
  show: {
    width: "70%",
    transition: { duration: 2 },
  },
};

export const line60Animation = {
  hidden: { width: "0%" },
  show: {
    width: "60%",
    transition: { duration: 2 },
  },
};

export const line50Animation = {
  hidden: { width: "0%" },
  show: {
    width: "50%",
    transition: { duration: 2 },
  },
};

export const line40Animation = {
  hidden: { width: "0%" },
  show: {
    width: "40%",
    transition: { duration: 2 },
  },
};

export const fade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { type: "tween", ease: "easeOut", duration: 1, delay: 0.5 },
  },
};

export const reveal = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 1,
    },
  },
};

export const photoAnimation = {
  hidden: { scale: 1.5, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.5,
      delay: 0.5,
    },
  },
};
