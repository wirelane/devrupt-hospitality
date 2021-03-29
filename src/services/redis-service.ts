import redis from "redis";
import { RedisClient } from "redis";
import config from "../config";

export class RedisService {
  private readonly client = redis.createClient(config.REDIS_URL) as RedisClient;
  
  // RedisClient has a bug in the initialization using `url`:
  // https://github.com/NodeRedis/node-redis/issues/1501

  // private readonly client = new RedisClient({
  //   url: config.REDIS_URL
  // });

  public get(key: string): Promise<String> {
    return new Promise<String>((resolve, reason) => {
      this.client.get(key, (err, data) => {
        resolve(data);
      });
    });
  }

  public set(key: string, value: string) {
    this.client.set(key, value);
  }

  public del(key: string): Promise<Number> {
    return new Promise<Number>((resolve, reason) => {
      this.client.del(key, (err, data) => {
        resolve(data);
      });
    });
  }
}