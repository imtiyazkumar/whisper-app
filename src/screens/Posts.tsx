/**
 * Whisper
 *
 * A micro-blogging platform.
 *
 * @author    Afaan Bilal
 * @copyright 2023 Afaan Bilal
 * @link      https://eonyx.io
 */

import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import PostCard from '../components/PostCard';
import { Colors } from '../utils/colors';
import { Post } from '../types';

type PostProps = {
    posts: Post[];
};

const Posts: React.FC<PostProps> = ({ posts }) => {
    return (
        <FlatList
            style={styles.outer}
            contentContainerStyle={styles.container}
            data={posts}
            renderItem={({ item }) => <PostCard post={item} />}
            keyExtractor={item => item.uuid}
        />
    );
};

export default Posts;

const styles = StyleSheet.create({
    outer: {
        flex: 1,
        backgroundColor: Colors.DARK,
    },
    container: {
        backgroundColor: Colors.DARK,
    },
});
