import { shallowMount } from "@vue/test-utils";
import PhotoCard from "@/components/PhotoCard.vue";

describe("PhotoCard.vue", () => {
  it("PhotoCard is vue instance", () => {
    const wrapper = shallowMount(PhotoCard, {
      propsData: {
        photo: {
          albumId: 1,
          id: 1,
          thumbnailUrl: "https://via.placeholder.com/150/92c952",
          title: "accusamus beatae ad facilis cum similique qui sunt",
          url: "https://via.placeholder.com/600/92c952",
        },
      },
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it("PhotoCard renders title", () => {
    const title = "accusamus beatae ad facilis cum similique qui sunt";
    const wrapper = shallowMount(PhotoCard, {
      propsData: {
        photo: {
          albumId: 1,
          id: 1,
          thumbnailUrl: "https://via.placeholder.com/150/92c952",
          title: "accusamus beatae ad facilis cum similique qui sunt",
          url: "https://via.placeholder.com/600/92c952",
        },
      },
    });
    expect(wrapper.html()).toContain(title);
  });
});
