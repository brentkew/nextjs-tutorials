// Temporary Data
const users = [
    { id: 1, name: "Sujha Sundararajan", profileImage: "https://cimg.co/authors/775/selfie-1.jpg" },
    { id: 2, name: "Sujha Sundararajan", profileImage: "https://cimg.co/wp-content/uploads/2024/02/26094855/Michael-Graw-150x150.jpg" },
    { id: 3, name: "Ruholamin Haqshanas", profileImage: "https://cimg.co/authors/29219/sergio-2.jpg" },
    { id: 4, name: "Hassan Shittu", profileImage: "https://cimg.co/authors/799/goran.jpg" },
    { id: 5, name: "Jimmy Aki", profileImage: "https://cimg.co/authors/990/hassan-shittu.jpg" }
  ];
  

  const posts = [
    {
      id: 1,
      userId: 1,
      title: "US Govt. Moves $2B of Silk Road Bitcoin to Anonymous Address: Arkham",
      url: "https://cryptonews.com/news/us-government-moves-2b-of-silk-road-bitcoin-to-anonymous-address-arkham.htm",
      date: "14 hours ago",
      category: "Bitcoin News",
      imageUrl: "https://cimg.co/wp-content/uploads/2024/07/30044129/1722314489-1722314464502_processed.jpg",
      data: "This article discusses the recent movement of $2 billion worth of Bitcoin from the Silk Road case to an anonymous address, as reported by Arkham."
    },
    {
      id: 2,
      userId: 2,
      title: "Bitcoin Price Prediction: BTC Surges to $70,000 Amid Trump’s Bold Endorsement",
      url: "https://cryptonews.com/news/bitcoin-price-to-70000-amid-trumps-bold-endorsement.htm",
      date: "1 day ago",
      category: "Bitcoin News",
      imageUrl: "https://cimg.co/wp-content/uploads/2024/07/29134924/1722260963-29.jpg",
      data: "This article predicts that Bitcoin’s price could surge to $70,000 following a bold endorsement from former President Trump."
    },
    {
      id: 3,
      userId: 3,
      title: "University of Wyoming Establishes First Academic Bitcoin Research Institute",
      url: "https://cryptonews.com/news/university-of-wyoming-establishes-first-academic-bitcoin-research-institute.htm",
      date: "1 day ago",
      category: "Bitcoin News",
      imageUrl: "https://cimg.co/wp-content/uploads/2024/07/29063752/1722235071-1722229196147_processed.jpg",
      data: "The University of Wyoming has announced the creation of the first academic research institute dedicated to Bitcoin, aiming to advance blockchain and cryptocurrency research."
    },
    {
      id: 4,
      userId: 4,
      title: "Fed Acquiring Bitcoin Is Hedge Against Themselves, Says Gabor Gurbacs",
      url: "https://cryptonews.com/news/fed-acquiring-bitcoin-is-hedge-against-themselves-says-gabor-gurbacs.htm",
      date: "1 day ago",
      category: "Bitcoin News",
      imageUrl: "https://cimg.co/wp-content/uploads/2024/07/22143734/1721659054-usel_optimized.jpg",
      data: "Gabor Gurbacs argues that the Federal Reserve's acquisition of Bitcoin could be a strategic hedge against potential economic issues."
    },
    {
      id: 5,
      userId: 5,
      title: "SEC Charges Bitcoin Bear and Short Seller Andrew Left for $20M Fraud Scheme",
      url: "https://cryptonews.com/news/sec-charges-bitcoin-bear-andrew-left-for-20m-fraud-scheme.htm",
      date: "1 day ago",
      category: "Bitcoin News",
      imageUrl: "https://cimg.co/wp-content/uploads/2024/07/29051418/1722230058-1722228892306_processed.jpg",
      data: "The SEC has charged Andrew Left, a known Bitcoin skeptic and short seller, with a $20 million fraud scheme."
    },
    {
      id: 6,
      userId: 1,
      title: "Hong Kong Lawmaker Advocates for Bitcoin in Fiscal Reserves",
      url: "https://cryptonews.com/news/hong-kong-lawmaker-advocates-bitcoin-fiscal-reserves.htm",
      date: "1 day ago",
      category: "Bitcoin News",
      imageUrl: "https://cimg.co/wp-content/uploads/2024/07/29042916/1722227356-1722227333161_processed.jpg",
      data: "A Hong Kong lawmaker is pushing for Bitcoin to be included in the city’s fiscal reserves as a strategic asset."
    },
    {
      id: 7,
      userId: 2,
      title: "Cantor Fitzgerald Launches $2 Billion Bitcoin Financing Initiative",
      url: "https://cryptonews.com/news/cantor-fitzgerald-launches-2-billion-bitcoin-financing-initiative.htm",
      date: "2 days ago",
      category: "Bitcoin News",
      imageUrl: "https://cimg.co/wp-content/uploads/2024/07/28094844/1722160124-1722160031734_processed.jpg",
      data: "Cantor Fitzgerald has introduced a $2 billion Bitcoin financing initiative aimed at increasing institutional participation in the cryptocurrency market."
    },
    {
      id: 9,
      userId: 3,
      title: "Trump Says Never Sell Your Bitcoin, Will Sack Gensler, Create Strategic Crypto Reserve",
      url: "https://cryptonews.com/news/trump-says-never-sell-your-bitcoin-will-sack-gensler-create-strategic-crypto-reserve.htm",
      date: "2 days ago",
      category: "Bitcoin News",
      imageUrl: "https://cimg.co/wp-content/uploads/2024/07/28095325/1722160404-trump-speaks-at-bitcoin-2024-conference.jpg",
      data: "In a recent speech, Trump advised never selling Bitcoin, announced plans to replace SEC Chair Gary Gensler, and proposed creating a strategic crypto reserve."
    },
    {
      id: 10,
      userId: 2,
      title: "Bobby Lee, CEO of Ballet, on ETF Predictions Coming True, BTC Hitting $5 Million, and Bitcoin Ownership | Ep. 355",
      url: "https://cryptonews.com/exclusives/bobby-lee-ceo-of-ballet-on-etf-predictions-coming-true-btc-hitting-5-million-and-bitcoin-ownership-ep-355.htm",
      date: "2 days ago",
      category: "Bitcoin News",
      imageUrl: "https://cimg.co/wp-content/uploads/2024/07/26142157/1722003717-bobby-lee.jpg",
      data: "Bobby Lee discusses ETF predictions, Bitcoin reaching $5 million, and the importance of Bitcoin ownership in an exclusive interview."
    }
  ];
  
  
export const getPosts = async () => {
  return posts;
};

export const getSinglePost = async (id) => {
  return posts.find((post) => post.id === parseInt(id) );
};

export const getSingleUser = async (id) => {
  return users.find((user) => user.id === parseInt(id) );
};