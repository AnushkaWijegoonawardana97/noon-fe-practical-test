import { MongoClient } from "mongodb";

async function handler(request, response) {
  const client = await MongoClient.connect(
    "mongodb+srv://noongram:noongram123@noongram.kprfn.mongodb.net/noongram?retryWrites=true&w=majority"
  );

  if (request.method === "POST") {
    const { username, description, image } = request.body;

    if (!username || username.trim() === "") {
      response.status(422).json({ message: "Invalid inputs..." });
      return;
    }

    const db = client.db();

    await db.collection("posts").insertOne({
      username: username,
      description: description,
      image: image,
    });

    response.status(201).json({
      message: "New post has been created successfully.",
    });
  }

  if (request.method === "GET") {
    const db = client.db();
    const postlist = await db
      .collection("posts")
      .find()
      .sort({ _id: -1 })
      .toArray();
    response.status(200).json({ posts: postlist });
  }

  client.close();
}

export default handler;
