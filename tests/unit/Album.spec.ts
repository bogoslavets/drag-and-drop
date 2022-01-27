import { shallowMount } from "@vue/test-utils";
import AlbumCard from "@/components/AlbumCard.vue";

describe("AlbumCard.vue", () => {
  it("AlbumCard is vue instance", () => {
    const wrapper = shallowMount(AlbumCard, {
      propsData: {
        album: {
          id: 1,
          title: "quidem molestiae enim",
          userId: 1,
        },
      },
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it("AlbumCard renders id", () => {
    const id = 1;
    const wrapper = shallowMount(AlbumCard, {
      propsData: {
        album: {
          id: 1,
          title: "quidem molestiae enim",
          userId: 1,
        },
      },
    });
    expect(wrapper.html()).toContain(id);
  });

  it("AlbumCard renders title", () => {
    const title = "quidem molestiae enim";
    const wrapper = shallowMount(AlbumCard, {
      propsData: {
        album: {
          id: 1,
          title: "quidem molestiae enim",
          userId: 1,
        },
      },
    });
    expect(wrapper.html()).toContain(title);
  });

  /*it("AlbumCard calls onDrop", () => {
    const wrapper = shallowMount(AlbumCard, {
      propsData: {
        album: {
          id: 1,
          title: "quidem molestiae enim",
          userId: 1,
        },
      },
    });
    const onDrop = jest.fn();

    wrapper.setMethods(onDrop);
    expect(onDrop).toBeCalled();
  }); */
});
