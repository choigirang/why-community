import usePostForm from '@/hooks/post/usePostForm';
import useInputs from '@/hooks/common/useInputs';
import { RootState } from '@/redux/store';
import { api } from '@/util/api';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

/** 댓글 추가하기 */
export default function AddComment({ postNumber, author }: { postNumber: number; author: string }) {
  const [content, onChange] = useInputs('');
  const { dateHandler } = usePostForm();

  const user = useSelector((state: RootState) => state.user.user);

  const fetchCommentData = () => {
    if (content) {
      const postData = { postNumber, author, comment: content, date: dateHandler() };
      api.post('/post/comment', postData).then(res => console.log(res));
    }
    console.log({ date: dateHandler() });
  };

  return (
    <Container>
      <Input onChange={onChange} />
      <button onClick={fetchCommentData} disabled={!user.login}>
        제출
      </button>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  border: var(--border-solid1) black;
  border-radius: 3px;
  padding: var(--padding-content);
  background-color: var(--color-light-gray);
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 3px;
`;
