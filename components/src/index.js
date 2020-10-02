import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDatail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

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
                <CommentDatail
                    author="Sam"
                    timeAgo="Today at 4:45PM"
                    avatar={faker.image.avatar()}
                    content="Nice blog post"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDatail
                    author="Alex"
                    timeAgo="Today at 2:0AM"
                    avatar={faker.image.avatar()}
                    content="I like this subject"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDatail
                    author="Jane"
                    timeAgo="Today at 5:0AM"
                    avatar={faker.image.avatar()}
                    content="I like the writing"
                />
            </ApprovalCard>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));
