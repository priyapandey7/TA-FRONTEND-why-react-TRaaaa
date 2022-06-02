import Article from './Article';
import allData from '../data/articles';

function Articles() {
    return (
        <div className="container flex-2">
          { allData.map((articles) => (
              <Article key =  {articles.publishedAt} />
          ))

          }
        </div>

    );
}

export default Articles;