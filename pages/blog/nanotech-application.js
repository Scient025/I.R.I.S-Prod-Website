import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import styles from './nanotech.module.css';
import supabase from '../../src/utils/supabase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';

function Blog2() {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [commenterName, setCommenterName] = useState('');
    const [deviceId, setDeviceId] = useState(null);
    const [vote, setVote] = useState(null);
    const [voteCounts, setVoteCounts] = useState({ upvotes: 0, downvotes: 0 });

    useEffect(() => {
        const storedDeviceId = localStorage.getItem('deviceId');
        if (!storedDeviceId) {
            const newDeviceId = 'device-' + Math.random().toString(36).substring(2);
            localStorage.setItem('deviceId', newDeviceId);
            setDeviceId(newDeviceId);
        } else {
            setDeviceId(storedDeviceId);
        }
    }, []);

    const fetchVoteStatus = useCallback(async () => {
        if (!deviceId) return;

        const { data, error } = await supabase
            .from('votes')
            .select('vote_type')
            .eq('device_id', deviceId)
            .eq('post_id', 3)
            .limit(1);

            if (error) {
                console.error("Error fetching vote status:", error);
                return;
            }
        
            if (data.length > 0) setVote(data[0].vote_type);

const { data: upvotes } = await supabase
    .from('votes')
    .select('*')
    .eq('vote_type', 'upvote')
    .eq('post_id', 3);

const { data: downvotes } = await supabase
    .from('votes')
    .select('*')
    .eq('vote_type', 'downvote')
    .eq('post_id', 3);


        setVoteCounts({ upvotes: upvotes.length, downvotes: downvotes.length });
    }, [deviceId]);

    useEffect(() => {
        fetchComments();
        fetchVoteStatus();
    }, [deviceId, fetchVoteStatus]);

    const fetchComments = async (id) => {
        const { data, error } = await supabase
        .from('comments')
        .select('*')
        .eq('post_id', 3)
        .order('created_at', { ascending: false });
        console.log(data);
        if (error) console.error('Error fetching comments:', error);
        else setComments(data);
    };


    const handleVote = async (voteType) => {
        if (vote === voteType) {
            toast.error(`You have already ${voteType}d this blog.`);
            return;
        }

        await supabase.from('votes').upsert({
            device_id: deviceId,
            vote_type: voteType,
            post_id: 3,  
        });
                setVote(voteType);
        fetchVoteStatus();
    };

    const handleCommentSubmit = async () => {
        if (!newComment || !commenterName) {
            toast.error('Please enter your name and comment!');
            return;
        }

        const { data,error } = await supabase
        .from('comments')
        .insert(
        { username: commenterName, 
            comment: newComment,
            post_id: 3,
            device_id: deviceId,
         });
        if (error) {
            console.error('Error adding comment:', error);
            toast.error('Failed to add comment.');
        } else {
            setNewComment('');
            setCommenterName('');
            fetchComments(3);
            toast.success('Comment added successfully!');
        }

    };

    return (
        <div className={styles.blogPage}>
            <div className={styles.blogContent}>
                <main className={styles.mainContent}>
                    <h1 className={styles.pageTitle}>Application of Nanotechnology in Defence Sector</h1>
                    <p className={styles.pageSubtitle}>Revolutionizing Defense: The Power of Nanotechnology in Military Advancements</p>
                    <p className={styles.pageauthor}>By Shreya | November 18, 2024</p>
          
                    <div className={styles.blogDescription}>
                        <div className={styles.blogCard}>
                            <h2>&ldquo;The nanotechnologies of the future will have the power to turn science fiction into reality.&rdquo;</h2>
                            <h2> — Bill Gates</h2>
                        </div>

                        <div className={styles.blogCard}>
                            <p>
                                One of the transformative areas of research in today’s era is NANOTECHNOLOGY. Nanotechnology is transforming industries from medicine to electronics and is expected to drive the next major shift in science and technology. Its potential extends to defense, where its unique properties are being harnessed for advanced military technologies. The U.S. Department of Defense identified nanotechnology as one of six &ldquo;Strategic Research Areas&rdquo; in the mid-1990s.The main aims of military research into nanotechnology are to improve medical and casualty care for soldiers, and to produce lightweight, strong and multi-functional materials for use in clothing, both for protection and to provide enhanced connectivity. 
                                One of the primary objectives of military nanotechonolgy research  is to enhance battlefield dressings.Nanomaterials of copper and silver have been proven to have antimicrobial effects which when applied to bandages can help to keep wounds free of infection aiding the soldier’s wound healing process . 
                                Better Body Armour is another noteworthy area of research for the defence sector . Current body armor is limited in weight and effectiveness, as it may stop bullets but not the impact energy that can still cause harm. Nanomaterials, including tungsten and carbon nanotubes, are being researched to improve ballistic protection and help disperse impact energy, offering better protection in body armor, bulletproof vests, and protective gear.
                                Another field for integration of nanotechnology and defence  is Radar and Sonar Invisibility. Stealth ships and aircraft are being improved with the use of nanomaterials which can help ‘hide’ military hardware, such as submarines, from detection by radar and sonar systems. IIT Kanpur has developed the Anālakṣhya Metamaterial Surface Cloaking System (MSCS), a breakthrough in stealth technology designed to make objects nearly invisible to radar.
                            </p>
                        </div>

                        <div className={styles.blogCard}>
                            <p>
                            In conclusion, nanotechnology in defense offers groundbreaking advancements in materials, weapons, communication, and healthcare. Its applications, from enhanced armor to improved medical care, are transformative. However, ethical and security concerns must be addressed to ensure responsible deployment.                           
                             </p>
                            <div className={styles.imageGallery}>
                                <Image src="/nanotech1.png" alt="TARZAN Simulation" width={500} height={300} className={styles.blogImage} />
                                <Image src="/nanotech2.png" alt="TARZAN Chassis" width={500} height={300} className={styles.blogImage} />
                            </div>
                        </div>

                        <div className={styles.blogCard}>
                            <h2>Summary</h2>
                            <p>
                                Nanotechnology is revolutionizing various industries, and its potential in defense is vast. The U.S. Department of Defense identified it as a strategic research area in the 1990s, focusing on improving soldier care and developing advanced materials for protection and functionality. Key applications include improved battlefield dressings with antimicrobial nanomaterials like copper and silver to prevent infection and promote faster healing.Enhanced body armor using nanomaterials like tungsten and carbon nanotubes offers better protection against bullets and blasts, reducing fatal injury risks. Additionally, radar and sonar invisibility technologies are being developed using nanomaterials to enhance stealth capabilities in military vehicles, ships, and aircraft. While these innovations hold immense promise, the use of nanotechnology in defense also raises ethical and security concerns that must be addressed to ensure its responsible deployment.

                            </p>
                        </div>

                        <div className={styles.blogCard}>
                            <h2>References</h2>  
                            <ul>
                                <li>
                                    <a href="https://ftp.idu.ac.id/wp-content/uploads/ebook/tdg/MILITARY%20PLATFORM%20DESIGN/Military%20Nanotechnology.pdf" 
                                       target="_blank" 
                                       rel="noopener noreferrer">
                                       Military Nanotechnology - PDF
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.slideshare.net/slideshow/nanotechnology-in-defence-applications/16066727" 
                                       target="_blank" 
                                       rel="noopener noreferrer">
                                       Nanotechnology in Defence Applications - SlideShare
                                    </a>
                                </li>
                            </ul>              
                        </div>
                    </div>

                    <div className={styles.voteSection}>
                        <button onClick={() => handleVote('upvote')} className={`${styles.voteButton} ${vote === 'upvote' ? styles.active : ''}`}>
                            ▲ Upvote ({voteCounts.upvotes})
                        </button>

                        <button onClick={() => handleVote('downvote')} className={`${styles.voteButton} ${vote === 'downvote' ? styles.active : ''}`}>
                            ▼ Downvote ({voteCounts.downvotes})
                        </button>
                    </div>
                    
                    <div className={styles.commentSection}>
                        <h3 className={styles.commentTitle}>Comments</h3>
                        <div className={styles.commentList}>
                            {comments.map((comment) => (
                                <div key={comment.id} className={styles.comment}>
                                    <p><strong>{comment.username}</strong>: {comment.comment}</p>
                                </div>
                            ))}
                        </div>

                        <h3 className={styles.commentTitle}>Add your Comment</h3>
                        <input type="text" placeholder="Your Name" value={commenterName} onChange={(e) => setCommenterName(e.target.value)} className={styles.commentInput} />
                        <textarea placeholder="Write a comment..." value={newComment} onChange={(e) => setNewComment(e.target.value)} className={styles.commentInput} />
                        <button onClick={handleCommentSubmit} className={styles.commentSubmitButton}>Submit Comment</button>
                    </div>
                </main>
            </div>
            <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar={false} closeOnClick pauseOnHover draggable theme="dark" />
            <div className={styles.centerContainer}>
                <Link href="/blog" className={styles.backtoblog}>Back to Blogs</Link>
            </div>
        </div>
    );
}

export default Blog2;
