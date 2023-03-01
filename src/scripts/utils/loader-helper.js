const SkeletonLoader = {
  loader() {
    const skeletons = document.querySelectorAll('.skeleton');
    skeletons.forEach((skeleton) => {
      const img = skeleton.querySelector('img');
      if (img) {
        img.addEventListener('load', () => {
          this._removeSkeleton(skeleton);
        });
      } else {
        this._removeSkeleton(skeleton);
      }
    });
  },

  _removeSkeleton(skeleton) {
    const img = skeleton.querySelector('img');
    if (img) {
      img.removeEventListener('load', this._removeSkeleton);
    }
    skeleton.classList.remove('skeleton');
  },
};

export default SkeletonLoader;
