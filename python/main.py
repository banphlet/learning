import asyncio
import time
import requests
import json


async def say_after(delay, what):
    await asyncio.sleep(delay)
    print(what)


async def main() -> None:
    print(f"started on {time.strftime('%X')}")

    await say_after(1, 'hello')
    await say_after(2, 'world')

    receive = requests.get(
        'https://jsonplaceholder.typicode.com/todos/1', stream=True)

    print(receive.text)
    # print(json.loads(receive.text)['userId'])

    print(f"finished at {time.strftime('%X')}")


asyncio.run(main())
