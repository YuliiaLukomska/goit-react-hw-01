import FriendListItem from './FriendListItem';
const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(friend => {
        return (
          <li key={friend.id}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;

{
  /* <ul>
  {books.map(book => {
    return <li key={book.id}>{book.name}</li>;
  })}
</ul>; */
}
