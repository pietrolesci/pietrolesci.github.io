// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-outreach",
          title: "outreach",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/outreach/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-how-i-built-wordify",
      
        title: "How I built Wordify",
      
      description: "A webapp that makes it easy to identify words that discriminate categories in textual data.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/wordify/";
        
      },
    },{id: "post-bayesian-inference-with-mcmc",
      
        title: "Bayesian inference with MCMC",
      
      description: "A gentle introduction with code examples",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/mcmc-tfp/";
        
      },
    },{id: "news-i-joined-cambridge-university-as-a-phd-student-in-computer-science",
          title: 'I joined Cambridge University as a PhD student in Computer Science',
          description: "",
          section: "News",},{id: "news-wordify-2-0-is-out-sparkles",
          title: 'Wordify 2.0 is out! :sparkles:',
          description: "",
          section: "News",},{id: "news-happy-to-join-amazon-aws-ai-labs-in-barcelona-working-on-efficient-dialogue-state-tracking-with-lluis-marquez-yoshinari-fujinuma-and-the-fantastic-aws-team-in-barcelona-nyc-and-seattle",
          title: 'Happy to join Amazon AWS AI Labs in Barcelona, working on efficient dialogue...',
          description: "",
          section: "News",},{id: "news-i-am-happy-to-share-that-my-internship-work-and-first-ever-paper-diable-efficient-dialogue-state-tracking-as-operations-on-tables-has-been-accepted-at-acl-2023-findings-rocket",
          title: 'I am happy to share that my internship work and first-ever paper, Diable:...',
          description: "",
          section: "News",},{id: "news-happy-to-share-that-our-work-anchoral-computationally-efficient-active-learning-for-large-and-imbalanced-datasets-has-been-accepted-to-naacl-2024-main-joint-work-with-my-supervisor-vlachos-nlp-details-in-post",
          title: '📚 Happy to share that our work AnchorAL: Computationally Efficient Active Learning for...',
          description: "",
          section: "News",},{id: "news-our-work-on-estimating-memorisation-in-language-models-from-only-observational-data-causal-estimation-of-memorisation-profiles-has-won-the-best-paper-award-at-acl-2024-joint-work-with-clara-meister-thomas-hofmann-vlachos-nlp-and-tpimentelms-details-in-post",
          title: '🚀 Our work on estimating memorisation in language models from only observational data,...',
          description: "",
          section: "News",},{id: "news-our-work-studying-the-challenges-of-training-small-language-models-has-been-accepted-at-emnlp-2024-findings-joint-work-with-richarddm1-and-paula-buttery",
          title: '🔬 Our work studying the challenges of training small language models has been...',
          description: "",
          section: "News",},{id: "news-our-large-language-model-memorization-l2m2-workshop-proposal-has-been-accepted-at-acl-2025-jointly-proposed-with-robin-jia-verna-dankers-johnny-tian-zheng-wei-pratyush-maini-yangsibo-huang-eric-wallace-and-tiago-pimentel",
          title: '🌟 Our “Large Language Model Memorization (L2M2)” workshop proposal has been accepted at...',
          description: "",
          section: "News",},{id: "news-i-have-been-recognised-as-one-of-the-outstanding-reviewers-for-emnlp-2024",
          title: 'I have been recognised as one of the Outstanding Reviewers for EMNLP 2024!...',
          description: "",
          section: "News",},{id: "news-the-papers-polypythias-stability-and-outliers-across-fifty-language-model-pre-training-runs-first-author-and-self-training-large-language-models-for-tool-use-without-demonstrations-have-been-accepted-respectively-at-iclr-2025-and-naacl-2025-findings",
          title: 'The papers PolyPythias: Stability and Outliers across Fifty Language Model Pre-Training Runs (first...',
          description: "",
          section: "News",},{id: "news-our-papers-causal-estimation-of-memorisation-profiles-was-recognised-as-paper-of-the-year-by-cambridge-s-department-of-computer-science-and-technology-1-out-all-publications-from-the-deparment-in-2024-official-announcement-on-bluesky-and-linkedin",
          title: 'Our papers Causal Estimation of Memorisation Profiles was recognised as Paper of the...',
          description: "",
          section: "News",},{id: "news-our-work-on-estimating-tokenisation-bias-in-language-models-from-only-observational-data-causal-estimation-of-tokenisation-bias-has-been-accepted-at-acl-2025-joint-work-with-clara-meister-thomas-hofmann-vlachos-nlp-and-tpimentelms-details-in-post",
          title: 'Our work on estimating tokenisation bias in language models from only observational data,...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/pietrolesci", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/pietrolesci", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/pietro_lesci", "_blank");
        },
      },{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/pietrolesci.bsky.social", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
