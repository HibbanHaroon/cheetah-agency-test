"use server";
import { Redis } from "ioredis";

function getRedisUrl() {
  if (process.env.REDIS_URL) {
    return process.env.REDIS_URL;
  }

  throw new Error("REDIS_URL is not defined");
}

const redis = new Redis(getRedisUrl(), {
  tls: {
    rejectUnauthorized: false,
  },
});

export async function saveOrderList(orderList) {
  try {
    await redis.set("orderList", JSON.stringify(orderList));
  } catch (error) {
    return { status: "Error", message: error.message };
  }
}

export async function getOrderList(list) {
  const cachedOrderList = await redis.get("orderList");

  if (cachedOrderList !== null) {
    return JSON.parse(cachedOrderList);
  } else {
    // If nothing exists return the list
    return list;
  }
}

export async function addTaskId(id) {
  let orderList = await getOrderList([]);
  orderList.push(id);
  await redis.set("orderList", JSON.stringify(orderList));
}

export async function deleteTaskId(id) {
  let orderList = await getOrderList([]);
  const index = orderList.findIndex((taskId) => taskId === id);

  orderList.splice(index, 1);

  await redis.set("orderList", JSON.stringify(orderList));
}
