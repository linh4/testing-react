import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios'
import Root from 'Root';
import App from 'components/App';

beforeEach(() => {
  moxios.install()
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{name: 'Fetch 1'}, {name: 'Fetch 2'}]
  })
})

afterEach(() => {
  moxios.uninstall()
})


it('can fetch a list of comments and display them', (done) => {
  // Attemp to render the entire app
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  )
  // find the *fetch comments* button and click it
  wrapped.find('.fetch-btn').simulate('click')
  // expect to find a list of components
  moxios.wait(() => {
    wrapped.update()
    expect(wrapped.find('li').length).toEqual(2)
    done()
    wrapped.unmount()
  })
})
