import React from 'react'
import ReactDOM from 'react-dom'
import CommentDetail from './CommentDetail'
import faker from 'faker'
import ApprovalCard from './ApprovalCard'

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author={faker.internet.userName()}
        imageAvatar={faker.image.avatar()}
        timeAgo="Today at 4:45PM"
        content={faker.lorem.words()}
        />
      <CommentDetail
        author={faker.internet.userName()}
        imageAvatar={faker.image.avatar()}
        timeAgo="Today at 2:00AM"
        content={faker.lorem.words()}
        />
      <CommentDetail
        author={faker.internet.userName()}
        imageAvatar={faker.image.avatar()}
        timeAgo="Yesterday at 5:03PM"
        content={faker.lorem.words()}
        />
      <ApprovalCard />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
