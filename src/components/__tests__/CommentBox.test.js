import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from 'Root'

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
    );
})

afterEach(() => {
  wrapped.unmount()
})

it('has a text area and 2 button', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(2);
})

it('has a text area that user can type in', () => {
  wrapped.find('textarea').simulate('change', {
    target: { value: 'new comment' }
  })
  wrapped.update()
  expect(wrapped.find('textarea').prop('value')).toEqual('new comment')
})

it('when form is submitted, textarea is empty', () => {
  wrapped.find('textarea').simulate('change', {
    target: { value: 'new comment' }
  })
  wrapped.update()
  wrapped.find('form').simulate('submit')
  wrapped.update()
  expect(wrapped.find('textarea').prop('value')).toEqual('')
})
