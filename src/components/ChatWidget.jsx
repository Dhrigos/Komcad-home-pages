import React, { useState } from 'react';

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div 
                className="chat-widget-btn" 
                onClick={() => setIsOpen(!isOpen)}
                title="Ask Assistant"
            >
                <i className={`fa-solid ${isOpen ? 'fa-times' : 'fa-comment-dots'}`}></i>
            </div>

            {isOpen && (
                <div style={{
                    position: 'fixed',
                    bottom: '90px',
                    right: '2rem',
                    width: '350px',
                    height: '500px',
                    backgroundColor: 'white',
                    borderRadius: '16px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                    zIndex: 1000,
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    border: '1px solid #e5e5e5'
                }}>
                    <div style={{
                        padding: '1.5rem',
                        background: 'var(--accent-color)',
                        color: 'white'
                    }}>
                        <h4 style={{ margin: 0 }}>GovAssistant</h4>
                        <p style={{ margin: 0, fontSize: '0.8rem', opacity: 0.9 }}>Digital Support Agent</p>
                    </div>
                    
                    <div style={{
                        flex: 1,
                        padding: '1.5rem',
                        overflowY: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem'
                    }}>
                        <div style={{
                            alignSelf: 'flex-start',
                            background: '#f1f1f1',
                            padding: '1rem',
                            borderRadius: '12px 12px 12px 0',
                            maxWidth: '85%',
                            fontSize: '0.9rem'
                        }}>
                            Hello! How can I assist you with government services today?
                        </div>
                    </div>

                    <div style={{
                        padding: '1rem',
                        borderTop: '1px solid #e5e5e5',
                        display: 'flex',
                        gap: '0.5rem'
                    }}>
                        <input 
                            type="text" 
                            placeholder="Type your question..." 
                            style={{
                                flex: 1,
                                padding: '0.8rem',
                                border: '1px solid #ddd',
                                borderRadius: '25px',
                                outline: 'none'
                            }}
                        />
                        <button style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            background: 'var(--accent-color)',
                            color: 'white',
                            border: 'none',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <i className="fa-solid fa-paper-plane"></i>
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ChatWidget;
