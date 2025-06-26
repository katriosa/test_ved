import { mount } from "@vue/test-utils";
import SalmonButton from "@/components/SalmonButton/SalmonButton.vue";

describe("SalmonButton", () => {
  it("mounts and renders slot content", () => {
    const wrapper = mount(SalmonButton, {
      slots: {
        default: "Click me",
      },
    });

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.text()).toContain("Click me");
    expect(wrapper.find("button.salmon-button").exists()).toBe(true);
  });

  it("sets disabled attribute when isDisabled prop is true", () => {
    const wrapper = mount(SalmonButton, {
      props: {
        isDisabled: true,
      },
    });

    expect(
      wrapper.find("button.salmon-button").attributes("disabled")
    ).toBeDefined();
  });

  it("applies classes based on props", () => {
    const wrapper = mount(SalmonButton, {
      props: {
        isTransperent: true,
        isLoading: true,
        isBased: true,
        isSecondary: true,
        isRed: true,
        isRedMiddle: true,
        isSmall: true,
        isStretched: true,
        isInactive: true,
        isBorderless: true,
      },
    });

    const button = wrapper.find("button.salmon-button");
    expect(button.classes()).toContain("salmon-button--transperent");
    expect(button.classes()).toContain("salmon-button--loading");
    expect(button.classes()).toContain("salmon-button--based");
    expect(button.classes()).toContain("salmon-button--secondary");
    expect(button.classes()).toContain("salmon-button--red");
    expect(button.classes()).toContain("salmon-button--red_middle");
    expect(button.classes()).toContain("salmon-button--small");
    expect(button.classes()).toContain("salmon-button--stretched");
    expect(button.classes()).toContain("salmon-button--inactive");
    expect(button.classes()).toContain("salmon-button--borderless");
  });

  it("emits click event", () => {
    const wrapper = mount(SalmonButton);
    wrapper.find("button.salmon-button").trigger("click");
    expect(wrapper.emitted()).toHaveProperty("click");
    expect(wrapper.emitted("click")).toHaveLength(1);
  });

  it("emits click event if route is not provided", () => {
    const wrapper = mount(SalmonButton, {
      props: {
        route: null,
      },
    });
    wrapper.find("button.salmon-button").trigger("click");
    expect(wrapper.emitted()).toHaveProperty("click");
    expect(wrapper.emitted("click")).toHaveLength(1);
  });
});

describe("window.location navigation", () => {
  beforeEach(() => {
    delete window.location;
    window.location = {
      pathname: "/initial-path",
    };
  });

  it("doesn't change window.location when route is falsy and isWindowLocation is true", async () => {
    const wrapper = mount(SalmonButton, {
      props: {
        route: null,
        isWindowLocation: true,
      },
    });
    await wrapper.find("button.salmon-button").trigger("click");
    expect(window.location.pathname).toBe("/initial-path");
    expect(wrapper.emitted()).toHaveProperty("click");
  });

  it("changes window.location when route is truthy and isWindowLocation is true", async () => {
    const wrapper = mount(SalmonButton, {
      props: {
        route: "/test",
        isWindowLocation: true,
      },
    });
    await wrapper.find("button.salmon-button").trigger("click");
    expect(window.location.pathname).toBe("/test");
    expect(wrapper.emitted()).toHaveProperty("click");
  });
});
