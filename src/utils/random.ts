// 获取指定范围的随机数
export const getRandomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// 获取 10000 - 99999 的随机数
export const getRandomIntFn = () => getRandomInt(10000, 99999);

