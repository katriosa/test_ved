import { mount } from '@vue/test-utils'
import SalmonButton from '@/components/SalmonButton/SalmonButton.vue'

describe('SalmonButton', () => {
  it('mounts and renders slot content', () => {
    const wrapper = mount(SalmonButton, {
      slots: {
        default: 'Click me'
      }
    })

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.text()).toContain('Click me')
    expect(wrapper.find('button.salmon-button').exists()).toBe(true)
  })
})
