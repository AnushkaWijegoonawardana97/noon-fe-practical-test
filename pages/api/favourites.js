import { MongoClient } from "mongodb";

async function handler(request, response) {
  const client = await MongoClient.connect(
    "mongodb+srv://noongram:noongram123@noongram.kprfn.mongodb.net/noongram?retryWrites=true&w=majority"
  );

  if (request.method === "POST") {
    const { postid, username, image, description } = request.body;

    if (!postid || postid.trim() === "") {
      response.status(422).json({ message: "Invalid inputs..." });
      return;
    }

    const db = client.db();

    await db.collection("favourites").insertOne({
      postid: postid,
      username: username,
      image: image,
      description: description,
    });

    response.status(201).json({
      message: "New post added as favourites.",
    });
  }

  if (request.method === "GET") {
    const db = client.db();
    const favoruteList = await db
      .collection("favourites")
      .find()
      .sort({ _id: -1 })
      .toArray();
    response.status(200).json({ favourites: favoruteList });
  }

  client.close();
}

export default handler;
