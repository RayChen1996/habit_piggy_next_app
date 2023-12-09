import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g fill="#020202" clipPath="url(#a)">
      <path d="M16 9.508a6.492 6.492 0 1 0 0 12.984 6.492 6.492 0 0 0 0-12.984ZM11.508 16a4.492 4.492 0 1 1 8.984 0 4.492 4.492 0 0 1-8.984 0Z" />
      <path d="M19.593 2.686c-1.054-3.58-6.13-3.58-7.184 0l-.188.638a1.748 1.748 0 0 1-2.51 1.04l-.584-.32c-3.28-1.784-6.866 1.804-5.08 5.082l.318.584a1.746 1.746 0 0 1-1.04 2.51l-.638.188c-3.58 1.054-3.58 6.13 0 7.184l.638.188a1.745 1.745 0 0 1 1.04 2.51l-.32.584c-1.784 3.28 1.802 6.868 5.082 5.08l.584-.318a1.746 1.746 0 0 1 2.51 1.04l.188.638c1.054 3.58 6.13 3.58 7.184 0l.188-.638a1.746 1.746 0 0 1 2.51-1.04l.584.32c3.28 1.786 6.868-1.804 5.08-5.082l-.318-.584a1.745 1.745 0 0 1 1.04-2.51l.638-.188c3.58-1.054 3.58-6.13 0-7.184l-.638-.188a1.746 1.746 0 0 1-1.04-2.51l.32-.584c1.786-3.28-1.804-6.866-5.082-5.08l-.584.318a1.746 1.746 0 0 1-2.51-1.04l-.188-.638Zm-5.266.566c.492-1.67 2.856-1.67 3.348 0l.188.638a3.745 3.745 0 0 0 5.386 2.23l.582-.32c1.528-.83 3.2.84 2.368 2.37l-.318.584a3.744 3.744 0 0 0 2.232 5.384l.636.188c1.67.492 1.67 2.856 0 3.348l-.638.188a3.745 3.745 0 0 0-2.23 5.386l.32.582c.83 1.528-.84 3.2-2.37 2.368l-.582-.318a3.746 3.746 0 0 0-5.386 2.232l-.188.636c-.492 1.67-2.856 1.67-3.348 0l-.188-.638a3.746 3.746 0 0 0-5.384-2.23l-.584.32c-1.528.83-3.2-.84-2.368-2.37l.318-.582a3.746 3.746 0 0 0-2.23-5.388l-.638-.188c-1.67-.492-1.67-2.856 0-3.348l.638-.188a3.746 3.746 0 0 0 2.23-5.382L5.8 8.17c-.83-1.528.84-3.2 2.37-2.368l.584.318a3.746 3.746 0 0 0 5.384-2.23l.188-.638Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h32v32H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgComponent;