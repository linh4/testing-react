import React from 'react';
import { mount } from 'enzyme';
import CommentList from 'components/CommentList';
import Root from 'Root';

let wrapped;

beforeEach(() => {
  const initialState = {
    comments: ['cmt1', 'cmt2']
  }
  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
    );
})

it('create one LI per comment', () => {
  expect(wrapped.find('li').length).toEqual(2)
})

it('show the text for each comment', () => {
  expect(wrapped.render('li').text()).toContain('cmt1')
  expect(wrapped.render('li').text()).toContain('cmt2')
})
