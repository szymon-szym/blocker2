import { shallowMount } from '@vue/test-utils'
import MainView from '@/components/MainView.vue'

describe('HelloWorld.vue', () => {
  it('renders title', () => {
    const msg = 'Add blocker'
    const wrapper = shallowMount(MainView, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
    
  })
})
