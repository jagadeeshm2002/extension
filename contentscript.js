// YouTube Home Page Video Filter with Smooth Transitions
const createHomePageFilter = (filterWords) => {
  const words = Array.isArray(filterWords) ? filterWords : [filterWords];
  let lastScrollY = window.scrollY;
  let isProcessing = false;
  let hiddenVideosCount = 0;
  let isShowingHidden = false;

  // Add necessary styles for animations and toggle buttons
  const addStyles = () => {
    const style = document.createElement('style');
    style.setAttribute('data-youtube-filter', 'true');
    style.textContent = `
        @keyframes hideVideo {
          0% {
            opacity: 1;

            transform: scale(1);
          }
          100% {
            opacity: 0;
            display: none;
            transform: scale(0.95);
          }
        }
  
        @keyframes showVideo {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            display: block;
            transform: scale(1);
          }
        }
  
        ytd-rich-item-renderer[data-filtered="true"] {
          animation: hideVideo 0.5s ease-out forwards;
          opacity: 0;
          transform: scale(0.95);
          position: relative;
          pointer-events: none;
        }
  
        ytd-rich-item-renderer[data-filtered="true"].show-hidden {
          animation: showVideo 0.5s ease-out forwards;
          opacity: 0.7;
          transform: scale(1);
          filter: grayscale(1);
          pointer-events: auto;
        }
  
        ytd-rich-item-renderer[data-filtered="true"]:not(.show-hidden) * {
          pointer-events: none !important;
        }
  
        ytd-rich-item-renderer[data-filtered="true"].show-hidden:hover {
          opacity: 0.85;
          filter: grayscale(0.5);
          transition: all 0.2s ease;
        }
  
        #youtube-filter-toggle {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 9999;
          background: #ff0000;
          color: white;
          border: none;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          cursor: pointer;
          box-shadow: 0 2px 5px rgba(0,0,0,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          transition: all 0.3s ease;
          outline: none;
        }
  
        #youtube-filter-toggle:hover {
          transform: scale(1.1);
          background: #cc0000;
        }
  
        #youtube-filter-toggle.showing {
          background: #4CAF50;
        }
  
        #youtube-filter-toggle.showing:hover {
          background: #45a049;
        }
  
        #youtube-filter-count {
          position: absolute;
          top: -8px;
          right: -8px;
          background: #fff;
          color: #ff0000;
          border-radius: 50%;
          width: 20px;
          height: 20px;
          font-size: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 1px 3px rgba(0,0,0,0.2);
        }
      `;
    document.head.appendChild(style);
  };

  // Add toggle button
  const addToggleButton = () => {
    const button = document.createElement('button');
    button.id = 'youtube-filter-toggle';
    button.innerHTML = `
        Hidden
        <div id="youtube-filter-count">0</div>
      `;
    document.body.appendChild(button);

    button.addEventListener('click', toggleHiddenVideos);
    updateHiddenCount(0);
  };

  // Update hidden videos count
  const updateHiddenCount = (count) => {
    hiddenVideosCount = count;
    const countElement = document.querySelector('#youtube-filter-count');
    if (countElement) {
      countElement.textContent = count;
    }
  };

  // Toggle hidden videos
  const toggleHiddenVideos = () => {
    isShowingHidden = !isShowingHidden;
    const hiddenVideos = document.querySelectorAll('ytd-rich-item-renderer[data-filtered="true"]');
    const button = document.querySelector('#youtube-filter-toggle');

    hiddenVideos.forEach(video => {
      video.classList.toggle('show-hidden');
    });

    if (button) {
      button.classList.toggle('showing');
    }
  };

  // Process single video with debouncing
  const processVideo = (video) => {
    // Skip if already processed
    if (video.hasAttribute('data-filtered')) return;

    // Get the title element
    const titleElement = video.querySelector("#video-title");
    if (!titleElement) return;

    const title = titleElement.textContent.toLowerCase().trim();

    // Check if any filter word matches
    const matchedWord = words.find(word =>
      title.includes(word.toLowerCase().trim())
    );

    if (!matchedWord) {
      // Set filtered attribute for tracking
      video.setAttribute('data-filtered', 'true');
      updateHiddenCount(hiddenVideosCount + 1);
    }
  };

  // Process videos with chunking
  const processHomeVideos = () => {
    if (isProcessing) return;
    isProcessing = true;

    requestAnimationFrame(() => {
      try {
        const homeContent = document.querySelector("ytd-rich-grid-renderer");
        if (!homeContent) return;

        // Get only unprocessed videos
        const videos = Array.from(
          homeContent.querySelectorAll("ytd-rich-item-renderer:not([data-processed])")
        );

        // Process in chunks
        const chunkSize = 10;
        let index = 0;

        function processChunk() {
          const chunk = videos.slice(index, index + chunkSize);
          if (chunk.length === 0) {
            isProcessing = false;
            return;
          }

          chunk.forEach(video => {
            video.setAttribute('data-processed', 'true');
            processVideo(video);
          });

          index += chunkSize;
          if (index < videos.length) {
            requestAnimationFrame(processChunk);
          } else {
            isProcessing = false;
          }
        }

        processChunk();
      } catch (error) {
        console.error("Error processing videos:", error);
        isProcessing = false;
      }
    });
  };

  // Optimized scroll handler with throttling
  let scrollTimeout;
  const handleScroll = () => {
    if (scrollTimeout) return;

    scrollTimeout = setTimeout(() => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY &&
        window.innerHeight + currentScrollY >= document.body.offsetHeight - 1000) {
        processHomeVideos();
      }

      lastScrollY = currentScrollY;
      scrollTimeout = null;
    }, 150);
  };

  // Observer for new content
  const observer = new MutationObserver((mutations) => {
    if (mutations.some(mutation =>
      mutation.type === "childList" && mutation.addedNodes.length > 0
    )) {
      requestAnimationFrame(processHomeVideos);
    }
  });

  const start = () => {
    if (window.location.pathname !== "/" &&
      window.location.pathname !== "/feed/subscriptions") {
      return;
    }

    addStyles();
    addToggleButton();

    const initializeObserver = () => {
      const homeContent = document.querySelector("ytd-rich-grid-renderer");
      if (homeContent) {
        processHomeVideos();
        observer.observe(homeContent, { childList: true, subtree: true });
      } else {
        setTimeout(initializeObserver, 1000);
      }
    };

    initializeObserver();
    window.addEventListener('scroll', handleScroll, { passive: true });
  };

  const stop = () => {
    observer.disconnect();
    window.removeEventListener('scroll', handleScroll);

    const style = document.querySelector('style[data-youtube-filter]');
    if (style) style.remove();

    const button = document.querySelector('#youtube-filter-toggle');
    if (button) button.remove();
  };

  return { start, stop };
};

// Reset function
const resetVideos = () => {
  const videos = document.querySelectorAll('[data-filtered]');
  videos.forEach(video => {
    video.removeAttribute('data-filtered');
    video.removeAttribute('data-processed');
    video.classList.remove('show-hidden');
    video.style.removeProperty('transform');
    video.style.removeProperty('opacity');
  });

  const style = document.querySelector('style[data-youtube-filter]');
  if (style) style.remove();

  const button = document.querySelector('#youtube-filter-toggle');
  if (button) button.remove();
};
const feedFilter = chrome.storage.sync.get(["filterEnabled"]);

// Initialize filter
const initializeFilter = (filterWords = ["React", "JavaScript"]) => {
  const startFilter = () => {
    const filter = createHomePageFilter(filterWords);
    requestAnimationFrame(() => filter.start());
    return filter;
  };
  if (feedFilter.filterEnabled) {


    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", startFilter);
    } else {
      return startFilter();
    }
  }
};

// Start filter
console.log("Starting YouTube filter...");
const filter = initializeFilter(["React", "JavaScript", "Tutorial"]);

// Debug helpers
window.youtubeFilter = {
  reset: () => {
    if (filter) {
      filter.stop();
      resetVideos();
    }
  },
  recheck: () => {
    if (filter) {
      filter.start();
    }
  }
};