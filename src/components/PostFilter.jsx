import React from 'react';
import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({ ...filter, query: e.target.value })}
                placeholder="Suche..." />

            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
                defaultValue="Sortieren nach..."
                options={[
                    { value: 'title', name: 'Nach Titel' },
                    { value: 'body', name: 'Nach Body' }
                ]} />
        </div>
    );
};

export default PostFilter;