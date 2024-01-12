import './Bookmark.css'

const Bookmark = (props) => {
    const title = props.title;
    return (
        <div>
            <p className='bookmark-title'>{title}</p>
        </div>
    );
};

export default Bookmark;