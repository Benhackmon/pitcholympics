import React from 'react';

const ContentContainer = () => {
    return (
        <div className='flex flex-col box-border w-full m-auto px-[60px] text-left'>
            <div className='mt-10'></div>
            {/* Intro paragraph*/}
            <div className='px-10 py-10'>
                <span className='leading-6'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Laudantium cupiditate corrupti, quibusdam expedita sed atque
                    rerum natus dolor harum! Labore sint recusandae, dicta illum
                    aperiam dignissimos at quae iusto nobis delectus itaque
                    pariatur totam temporibus et minus deserunt! Iste facere
                    repellendus officia ipsam sit explicabo atque sed itaque
                    saepe recusandae!
                    <br />
                    <br />
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ipsum, voluptate!
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet.
                </span>
            </div>
            {/* the authorId name and logo author */}
            <div className='px-10'>
                logo+{' '}
                <span className='text-xs text-stone-500'>
                    Amit Halevi Web Developer
                </span>
            </div>
        </div>
    );
};

export default ContentContainer;
