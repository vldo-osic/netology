import { DateComponent } from "../UI/Date";

import { ColumnList } from "../components/lists/ColumnList";
import { RowList } from "../components/lists/RowList";

import { newsItems, newsTypes, rates } from "../helpers/newsModuleData";
import { NewsItem } from "../components/NewsItem";
import { NewsType } from "../components/NewsType";
import { Rate } from "../components/Rate";

export const News = () => {
    return (
        <div className="news-container">
            <div className="header">
                <ColumnList>
                    {
                        newsTypes.map( newsType =>
                            <NewsType id={newsType.id}
                                      title={newsType.title}
                                      url={newsType.url}
                                      isActive={newsType.isActive}/>
                        )
                    }
                </ColumnList>
                <DateComponent />
            </div>
            <div className="main">
                <RowList>
                    {
                        newsItems.map( newsItem =>
                            <NewsItem icon={newsItem.icon}
                                      title={newsItem.title}
                                      url={newsItem.url}/>
                        )
                    }
                </RowList>
            </div>
            <div className="rates-list">
                <ColumnList>
                    {
                        rates.map( rate =>
                            <Rate currency={rate.currency}
                                  price={rate.price}
                                  difference={rate.difference}/>
                        )
                    }
                </ColumnList>
            </div>
        </div>
    )
}