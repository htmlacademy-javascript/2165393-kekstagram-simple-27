const PICTURES_COUNT = 25;

const likesCount = {
  MIN: 15,
  MAX : 200,
};

const descriptions = [
  'Еда здесь вкусная #food #taste #delicious',
  'Лето прекрасное время года #summer #relax #sea',
  'Сегодня был чудесный день #day #wonderful #chill',
];

const getRandomPositiveInteger = (a, b) => {
  if (a < 0 || b < 0) {
    return NaN;
  }

  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const checkStringLength = (string, length) =>
  string.length <= length;

const getRandomArrayElement = (array) =>
  array[getRandomPositiveInteger(0, array.length - 1)];

const createPicture = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(descriptions),
  likes: getRandomPositiveInteger(likesCount.MIN, likesCount.MAX),
  comments: getRandomPositiveInteger(0, 200),
});

const getPictures = () =>
  Array.from({ length: PICTURES_COUNT}, (_, pictureIndex) =>
    createPicture(pictureIndex + 1)
  );

checkStringLength('', 140);
getPictures();
