import './Card.css'
import rangeIconBeginner from './card-img/range.svg'
import rangeIconIntermediate from './card-img/range1.svg'
import rangeIconMaster from './card-img/range2.svg'

const Card = (props) => {
    const {
        img,
        title,
        author,
        students,
        level,
        rating,
        duration,
        modules,
    }
        = props;

    let rangeIcon;

    if (level === 'Intermediate') {
        rangeIcon = rangeIconIntermediate;
    } else if (level === 'Master') {
        rangeIcon = rangeIconMaster;
    } else {
        rangeIcon = rangeIconBeginner;
    }


    return <div className="container">
        <div className="card">
            <div className="card-image">
                <img src={img} alt="img"/>
                <span className="card-image-level">{level}
                    <span className='card-image-level-range'><img src={rangeIcon} alt="RangeMustBe"/></span></span>
            </div>
            <div className="card-content">
                <div className="card-title">{title} </div>
                <div className="card-author">
                    <div className="card-author-name">{author}</div>
                    <div className="card-author-rating">{rating}</div>
                </div>
                <div className="card-info">
                    <div className="card-info-members">{students}</div>
                    <div className="card-info-modules">{modules}</div>
                    <div className="card-info-hours">{duration}</div>
                </div>
            </div>
        </div>
    </div>
}

export default Card;