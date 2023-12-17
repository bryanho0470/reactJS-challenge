import styled from "styled-components";
import { ITweet } from "./timeline";
import { auth, db, storage } from "../firebase";
import { deleteDoc, doc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
`;

const Column = styled.div``;

const Photo = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 15px;
`;

const Username = styled.span`
  font-weight: 600;
  font-size: 15px;
  color: black;
`;

const Payload = styled.p`
  margin: 10px 0px;
  font-size: 15px;
  color: black;
`;

const DeleteBbutton = styled.button`
  background-color: tomato;
  color: white;
  font-weight: 400;
  border: 0;
  font-size: 12px;
  padding: 5px 10px;
  text-transform: uppercase;
  border-radius: 5px;
  cursor: pointer;
`;

export default function Tweet({ username, photo, tweet, userId, id }: ITweet) {
  const user = auth.currentUser;
  const onDelete = async () => {
    const ok = confirm("Are you sure you want to delete this tweet??");
    if (!ok || user?.uid !== userId) return;
    if (user?.uid !== userId) return;
    try {
      await deleteDoc(doc(db, "tweets", id));
      if (photo) {
        const photoRef = ref(storage, `tweets/${user.uid}/${id}`);
        await deleteObject(photoRef);
      }
    } catch (e) {
      console.log(e);
    } finally {
    }
  };
  return (
    <Wrapper>
      <Column>
        <Username>{username}</Username>
        <Payload>{tweet}</Payload>
        {user?.uid === userId ? (
          <DeleteBbutton onClick={onDelete}>Delete</DeleteBbutton>
        ) : null}
      </Column>

      <Column>{photo ? <Photo src={photo} /> : null}</Column>
    </Wrapper>
  );
}
