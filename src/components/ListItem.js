import React from "react";

const ListItem = ({ taskObj, objAfterDeletion }) => {
  const { title, desc, id } = taskObj;
  return (
    <div className="list__item">
      <div className="list__item--combo">
        <h2 className="list__item--combo-heading">{title}</h2>
        <p className="list__item--combo-desc">{desc}</p>
      </div>
      <div className="list__item--changes">
        <div>
          <svg
            fill="#111111"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            width="30px"
            height="30px"
          >
            {" "}
            <path d="M 79.335938 15.667969 C 78.064453 15.622266 76.775 15.762109 75.5 16.099609 C 72.1 16.999609 69.299609 19.199219 67.599609 22.199219 L 64 28.699219 C 63.2 30.099219 63.699609 32.000781 65.099609 32.800781 L 82.400391 42.800781 C 82.900391 43.100781 83.400391 43.199219 83.900391 43.199219 C 84.200391 43.199219 84.399219 43.199609 84.699219 43.099609 C 85.499219 42.899609 86.1 42.399219 86.5 41.699219 L 90.199219 35.199219 C 91.899219 32.199219 92.4 28.700781 91.5 25.300781 C 90.6 21.900781 88.400391 19.100391 85.400391 17.400391 C 83.525391 16.337891 81.455078 15.744141 79.335938 15.667969 z M 60.097656 38.126953 C 59.128906 38.201172 58.199219 38.724609 57.699219 39.599609 L 27.5 92 C 24.1 97.8 22.200781 104.30039 21.800781 110.90039 L 21 123.80078 C 20.9 124.90078 21.5 125.99961 22.5 126.59961 C 23 126.89961 23.5 127 24 127 C 24.6 127 25.199219 126.8 25.699219 126.5 L 36.5 119.40039 C 42 115.70039 46.7 110.8 50 105 L 80.300781 52.599609 C 81.100781 51.199609 80.599219 49.3 79.199219 48.5 C 77.799219 47.7 75.899609 48.199609 75.099609 49.599609 L 44.800781 102 C 41.900781 106.9 37.899609 111.20039 33.099609 114.40039 L 27.300781 118.19922 L 27.699219 111.30078 C 27.999219 105.60078 29.699609 100 32.599609 95 L 62.900391 42.599609 C 63.700391 41.199609 63.200781 39.3 61.800781 38.5 C 61.275781 38.2 60.678906 38.082422 60.097656 38.126953 z M 49 121 C 47.3 121 46 122.3 46 124 C 46 125.7 47.3 127 49 127 L 89 127 C 90.7 127 92 125.7 92 124 C 92 122.3 90.7 121 89 121 L 49 121 z M 104 121 A 3 3 0 0 0 101 124 A 3 3 0 0 0 104 127 A 3 3 0 0 0 107 124 A 3 3 0 0 0 104 121 z" />
          </svg>
        </div>
        <div
          onClick={() => {
            objAfterDeletion(id);
          }}
        >
          <svg
            fill="#111111"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="30px"
            height="30px"
          >
            <path d="M 21 2 C 19.355469 2 18 3.355469 18 5 L 18 7 L 10.15625 7 C 10.097656 6.992188 10.042969 6.984375 9.984375 6.984375 C 9.9375 6.988281 9.886719 6.992188 9.839844 7 L 8 7 C 7.640625 6.996094 7.304688 7.183594 7.121094 7.496094 C 6.941406 7.808594 6.941406 8.191406 7.121094 8.503906 C 7.304688 8.816406 7.640625 9.003906 8 9 L 9 9 L 9 45 C 9 46.644531 10.355469 48 12 48 L 38 48 C 39.644531 48 41 46.644531 41 45 L 41 9 L 42 9 C 42.359375 9.003906 42.695313 8.816406 42.878906 8.503906 C 43.058594 8.191406 43.058594 7.808594 42.878906 7.496094 C 42.695313 7.183594 42.359375 6.996094 42 7 L 40.167969 7 C 40.058594 6.980469 39.949219 6.980469 39.84375 7 L 32 7 L 32 5 C 32 3.355469 30.644531 2 29 2 Z M 21 4 L 29 4 C 29.554688 4 30 4.445313 30 5 L 30 7 L 20 7 L 20 5 C 20 4.445313 20.445313 4 21 4 Z M 11 9 L 18.832031 9 C 18.941406 9.019531 19.050781 9.019531 19.15625 9 L 30.832031 9 C 30.941406 9.019531 31.050781 9.019531 31.15625 9 L 39 9 L 39 45 C 39 45.554688 38.554688 46 38 46 L 12 46 C 11.445313 46 11 45.554688 11 45 Z M 17.988281 19.988281 C 17.582031 19.992188 17.21875 20.238281 17.0625 20.613281 C 16.910156 20.992188 17 21.421875 17.292969 21.707031 L 23.585938 28 L 17.292969 34.292969 C 17.03125 34.542969 16.925781 34.917969 17.019531 35.265625 C 17.109375 35.617188 17.382813 35.890625 17.734375 35.980469 C 18.082031 36.074219 18.457031 35.96875 18.707031 35.707031 L 25 29.414063 L 31.292969 35.707031 C 31.542969 35.96875 31.917969 36.074219 32.265625 35.980469 C 32.617188 35.890625 32.890625 35.617188 32.980469 35.265625 C 33.074219 34.917969 32.96875 34.542969 32.707031 34.292969 L 26.414063 28 L 32.707031 21.707031 C 33.003906 21.417969 33.089844 20.980469 32.929688 20.601563 C 32.769531 20.21875 32.394531 19.976563 31.980469 19.988281 C 31.71875 19.996094 31.472656 20.105469 31.292969 20.292969 L 25 26.585938 L 18.707031 20.292969 C 18.519531 20.097656 18.261719 19.992188 17.988281 19.988281 Z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
