I was finally able to make the first post on this blog using github as a
filesystem for storing the posts in md format.

The first idea was to use a rust written api, but since i cancelled my
oVirt infrastructure project due to the recent developments in the
world economy, i gave up on that and opted instead for free and cheap
storage.

Will write more, since this is more of a test post than anything else,
pending some cleanup to have this blog semi-ready, just like every other
project i do. :D

Here are some code snipets, that i am interested in, to test the syntax
highlighting:

bash

```bash
$ echo "test" > /dev/null
...
```

Rust

```rust
async fn test() -> Result<(), std::io::Error> {
    Ok(())
}
```

Go

```go
type TestSyntax struct {}

func (t *TestSyntax) TestSyntax() error {
    return nil
}
```

Typescript

```typescript
interface Post {
  content: string
  date: number
}

const myPost: Post {
    content: "test post",
    date: 1584828965877
}
```

Javascript

```javascript
const myFn = async post => (post.meta !== null ? post.meta : {});
```

Python 3.x

```python
async get_my_post_content():
    return "post"
```

[link](https://victor.cloudflavor.io) to something.

embed an image  
![a random image](https://i.picsum.photos/id/573/200/200.jpg "An image")

Tada!
