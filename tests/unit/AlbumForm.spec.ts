import { shallowMount } from "@vue/test-utils";
import AlbumForm from "@/components/AlbumForm.vue";

describe("AlbumForm.vue", () => {
  it("AlbumForm is vue instance", () => {
    const wrapper = shallowMount(AlbumForm, {
      propsData: {},
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it("AlbumForm emits save-album", () => {
    const wrapper = shallowMount(AlbumForm, {
      propsData: {},
    });
    const button = wrapper.find("#addAlbum");
    button.trigger("click");
    expect(wrapper.emitted("save-album")).toBeTruthy();
  });
});
