/* VOI Creative Studio · sales reference page
   - 레퍼런스 필터 탭
   - 한 번에 하나의 영상만 재생
   - 스크롤 등장 애니메이션
   (JS 없이도 모든 영상은 재생 가능하고, 필터 탭만 동작하지 않습니다.)
*/
(function () {
  'use strict';

  /* ── 1. 필터 탭 ───────────────────────────────────────────── */
  var grid = document.getElementById('galleryGrid');
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.tab'));
  var countEl = document.getElementById('galleryCount');

  if (grid && tabs.length) {
    var cards = Array.prototype.slice.call(grid.querySelectorAll('.card'));

    var applyFilter = function (filter) {
      var shown = 0;
      cards.forEach(function (card) {
        var tags = (card.getAttribute('data-tags') || '').split(/\s+/);
        var match = filter === 'all' || tags.indexOf(filter) !== -1;
        card.classList.toggle('is-hidden', !match);
        if (!match) {
          var v = card.querySelector('video');
          if (v && !v.paused) { v.pause(); }
        }
        if (match) { shown++; }
      });

      if (countEl) {
        countEl.textContent = filter === 'all'
          ? shown + '편 전체 표시 중'
          : shown + '편 표시 중';
      }
    };

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        tabs.forEach(function (t) { t.setAttribute('aria-selected', 'false'); });
        tab.setAttribute('aria-selected', 'true');
        applyFilter(tab.getAttribute('data-filter') || 'all');
      });
    });
  }

  /* ── 2. 동시에 한 영상만 재생 ─────────────────────────────── */
  var allVideos = Array.prototype.slice.call(document.querySelectorAll('video'));
  allVideos.forEach(function (video) {
    video.addEventListener('play', function () {
      allVideos.forEach(function (other) {
        if (other !== video && !other.paused) { other.pause(); }
      });
    });
  });

  /* ── 3. 스크롤 등장 ───────────────────────────────────────── */
  var items = Array.prototype.slice.call(document.querySelectorAll('[data-reveal]'));
  if (!items.length) { return; }

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) { return; }

  items.forEach(function (el) { el.classList.add('reveal'); });

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });

  items.forEach(function (el) { io.observe(el); });
})();
