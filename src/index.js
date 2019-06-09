import React from 'react'
import ReactDOM from 'react-dom'
import CommentDetail from './CommentDetail'
import faker from 'faker'
import ApprovalCard from './ApprovalCard'

const App = () => {
  return (
    <div className="ui container comments">

      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author={faker.internet.userName()}
          imageAvatar={faker.image.avatar()}
          timeAgo="Today at 4:45PM"
          content={faker.lorem.words()}
          />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.internet.userName()}
          imageAvatar={faker.image.avatar()}
          timeAgo="Today at 2:00AM"
          content={faker.lorem.words()}
          />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.internet.userName()}
          imageAvatar={faker.image.avatar()}
          timeAgo="Yesterday at 5:03PM"
          content={faker.lorem.words()}
          />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
