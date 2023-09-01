import { Icon } from "../UI/Icon"
import { SearchLine } from "../components/SearchLine"
import { ServiceItem } from "../components/ServiceItem"
import { ColumnList } from "../components/lists/ColumnList"
import { services } from "../helpers/searchModuleData"

export const Search = () => {
    return (
        <div className="search-container">
            <div className="search-container__logo">
                <Icon iconURL="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Yandex_icon.svg/2048px-Yandex_icon.svg.png"
                      size="100px"/>
            </div>
            <div className="services-list">
                <ColumnList>
                    {
                        services.map(service => 
                            <ServiceItem title={service.title} url={service.url}/>
                        )
                    }
                </ColumnList>
            </div>
            <SearchLine/>
            <h3>Найдется всё. Например, <span>фаза луны сегодня</span></h3>
        </div>
    )
}