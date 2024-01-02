const binarySearch = (num, list, left, right) => {
  while (left <= right) {
    let mid = left + Math.ceil((right - left) / 2);
    if (list[mid] === num) return mid;
    if (list[mid] > num) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};

const main = () => {
  const list = [11, 22, 34, 43, 52, 63, 71, 84, 97];
  const num = 100;
  const position = binarySearch(num, list, 0, list.length);
  if (position === -1) {
    console.log(num, "is not present in the list");
  } else {
    console.log("Index of num is", position);
  }
};

main();
