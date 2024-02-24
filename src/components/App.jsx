import Profile from './Profile';
import FriendList from './FriendList';
import TransactionHistory from './TransactionHistory';
import transactions from '../transactions.json';
import userData from '../userData.json';
import friends from '../friends.json';

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
