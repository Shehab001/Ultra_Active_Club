import React from "react";

const Modal = () => {
  return (
    <div>
      <div id="accordion-collapse" data-accordion="collapse">
        <h2 id="accordion-collapse-heading-1">
          <button
            type="button"
            class="flex items-center justify-between w-full p-5 font-medium text-left border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
            data-accordion-target="#accordion-collapse-body-1"
            aria-expanded="true"
            aria-controls="accordion-collapse-body-1"
          >
            <p>How does React works?</p>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-1"
          class=""
          aria-labelledby="accordion-collapse-heading-1"
        >
          <div class="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <p class="mb-2 text-gray-500 dark:text-gray-400">
              <p>
                React uses a declarative paradigm that makes it easier to reason
                about your application and aims to be both efficient and
                flexible. It designs simple views for each state in your
                application, and React will efficiently update and render just
                the right component when your data changes.
              </p>
            </p>
          </div>
        </div>
        <h2 id="accordion-collapse-heading-1">
          <button
            type="button"
            class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            data-accordion-target="#accordion-collapse-body-1"
            aria-expanded="true"
            aria-controls="accordion-collapse-body-1"
          >
            <span>Difference between props and state.</span>
          </button>
          <p className="p-5">
            Props are used to pass data from one component to another. The state
            is a local data storage that is local to the component only and
            cannot be passed to other components.
          </p>
        </h2>
        <div
          id="accordion-collapse-body-1"
          class="hidden"
          aria-labelledby="accordion-collapse-heading-1"
        ></div>
        <h2 id="accordion-collapse-heading-3">
          <button
            type="button"
            class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            data-accordion-target="#accordion-collapse-body-3"
            aria-expanded="false"
            aria-controls="accordion-collapse-body-3"
          >
            <p>What does useEffect do?</p>
          </button>
        </h2>
        <p className="p-5">
          The motivation behind the introduction of useEffect Hook is to
          eliminate the side-effects of using class-based components. For
          example, tasks like updating the DOM, fetching data from API
          end-points, setting up subscriptions or timers, etc can be lead to
          unwarranted side-effects
        </p>
        <div
          id="accordion-collapse-body-3"
          class="hidden"
          aria-labelledby="accordion-collapse-heading-3"
        ></div>
      </div>
    </div>
  );
};

export default Modal;
