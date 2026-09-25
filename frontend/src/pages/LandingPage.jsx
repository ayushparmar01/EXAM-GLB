import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  GraduationCap,
  ShieldCheck,
  ShieldAlert,
  Clock,
  Lock,
  CheckSquare,
  BarChart3,
  FileText,
  FileSpreadsheet,
  CheckCircle2,
  ArrowRight,
  Radio,
  Eye,
  Users,
  Award,
  Zap,
  ChevronDown,
  Sparkles,
  Check,
  LogIn
} from 'lucide-react';

const LandingPage = () => {
  const { isAuthenticated, role } = useAuth();
  const navigate = useNavigate();

  const [activeFaq, setActiveFaq] = useState(null);
  const [activeRoleTab, setActiveRoleTab] = useState('INSTRUCTORS');

  const toggleFaq = (index) => {
    setActiveFaq((prev) => (prev === index ? null : index));
  };

  const dashboardPath = role === 'ADMIN' ? '/admin/dashboard' : '/student/dashboard';

  const faqs = [
    {
      q: 'How does the anti-cheating proctoring system work?',
      a: 'GLB EXAMSPHERE enforces mandatory fullscreen mode and monitors browser visibility in real time. If a candidate leaves fullscreen, switches tabs, or opens another application, an immediate strike warning is triggered. Upon receiving 5 strikes, the assessment is automatically terminated and submitted with full audit logs.'
    },
    {
      q: 'Can instructors grant extra time to a student during an active exam?',
      a: 'Yes! Through the Live Proctoring Dashboard, instructors can remotely add +5, +10, or custom minutes to an active candidate\'s timer with a single click. The student\'s countdown timer updates instantly in real time.'
    },
    {
      q: 'What types of questions are supported?',
      a: 'GLB EXAMSPHERE supports Single Choice MCQs, Multi-Select MCQs (MSQs) with exact-match grading, question image attachments, and rich answer explanations. Instructors can also upload question banks directly via PDF extraction.'
    },
    {
      q: 'How do Scheduled Availability Windows work?',
      a: 'Instructors can define fixed time windows (startTime to endTime). Students can only start the exam while the window is live. If an attempt is started near the closing time, the countdown timer automatically clamps to the window deadline so students cannot exceed the cutoff.'
    },
    {
      q: 'Are official PDF scorecards and result certificates generated?',
      a: 'Yes. After submitting an assessment, students and instructors can download an official, beautifully branded PDF report card complete with score breakdowns, question-by-question explanations, and performance metrics.'
    }
  ];

  return (
    <div style={{ background: '#F8FAFC', color: '#0F172A', minHeight: '100vh', overflowX: 'hidden' }}>
      
      {/* 1. TOP NAVIGATION HEADER */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: '#0F172A',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '0.85rem 2rem',
        boxShadow: '0 2px 12px rgba(15, 23, 42, 0.15)'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          {/* Brand Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
            <div style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: '#0EA5E9',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              boxShadow: '0 2px 10px rgba(14, 165, 233, 0.4)',
              flexShrink: 0
            }}>
              <GraduationCap size={22} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <span style={{ fontSize: '1.25rem', fontWeight: 900, fontFamily: 'Outfit', letterSpacing: '-0.02em', color: '#FFFFFF', lineHeight: 1 }}>
                  GLB <span style={{ color: '#0EA5E9' }}>EXAMSPHERE</span>
                </span>
                <span style={{
                  fontSize: '0.62rem',
                  fontWeight: 800,
                  letterSpacing: '0.08em',
                  padding: '0.15rem 0.45rem',
                  borderRadius: '4px',
                  background: 'rgba(14, 165, 233, 0.2)',
                  color: '#38BDF8',
                  border: '1px solid rgba(14, 165, 233, 0.4)'
                }}>
                  ENTERPRISE
                </span>
              </div>
              <div style={{ fontSize: '0.72rem', color: '#94A3B8', marginTop: '2px' }}>
                Assessment Cloud
              </div>
            </div>
          </Link>

          {/* Nav Anchor Links */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '1.75rem', flexWrap: 'wrap' }}>
            <a href="#features" style={{ fontSize: '0.875rem', color: '#CBD5E1', fontWeight: 600, transition: 'color 0.2s' }}
               onMouseEnter={(e) => (e.target.style.color = '#38BDF8')}
               onMouseLeave={(e) => (e.target.style.color = '#CBD5E1')}>Features</a>
            <a href="#proctoring" style={{ fontSize: '0.875rem', color: '#CBD5E1', fontWeight: 600, transition: 'color 0.2s' }}
               onMouseEnter={(e) => (e.target.style.color = '#38BDF8')}
               onMouseLeave={(e) => (e.target.style.color = '#CBD5E1')}>Live Proctoring</a>
            <a href="#solutions" style={{ fontSize: '0.875rem', color: '#CBD5E1', fontWeight: 600, transition: 'color 0.2s' }}
               onMouseEnter={(e) => (e.target.style.color = '#38BDF8')}
               onMouseLeave={(e) => (e.target.style.color = '#CBD5E1')}>Portals</a>
            <a href="#faq" style={{ fontSize: '0.875rem', color: '#CBD5E1', fontWeight: 600, transition: 'color 0.2s' }}
               onMouseEnter={(e) => (e.target.style.color = '#38BDF8')}
               onMouseLeave={(e) => (e.target.style.color = '#CBD5E1')}>FAQ</a>
          </nav>

          {/* Auth Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            {isAuthenticated ? (
              <button
                onClick={() => navigate(dashboardPath)}
                className="btn btn-primary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.55rem 1.25rem',
                  fontWeight: 700,
                  fontSize: '0.875rem'
                }}
              >
                Go to Dashboard
                <ArrowRight size={16} />
              </button>
            ) : (
              <Link
                to="/login"
                className="btn btn-primary"
                style={{
                  padding: '0.55rem 1.25rem',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem'
                }}
              >
                <LogIn size={15} />
                Portal Sign In
              </Link>
            )}
          </div>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section style={{
        position: 'relative',
        padding: '5.5rem 1.5rem 4rem',
        textAlign: 'center',
        background: 'radial-gradient(ellipse at 50% 0%, rgba(14, 165, 233, 0.12) 0%, rgba(248, 250, 252, 0) 70%)'
      }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
            <span className="badge badge-primary" style={{ padding: '0.35rem 0.85rem', fontSize: '0.8rem', display: 'inline-flex', gap: '0.4rem', alignItems: 'center' }}>
              <Sparkles size={14} color="#0EA5E9" />
              Institutional Examination Cloud
            </span>
          </div>

          <h1 style={{
            fontSize: 'clamp(2.4rem, 5.5vw, 3.8rem)',
            fontWeight: 900,
            fontFamily: 'Outfit',
            lineHeight: 1.12,
            letterSpacing: '-0.03em',
            color: '#0F172A',
            marginBottom: '1.5rem'
          }}>
            Secure, Anti-Cheat Assessment Platform for <span style={{
              background: 'linear-gradient(135deg, #0284C7 0%, #0EA5E9 50%, #0369A1 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Modern Colleges</span>
          </h1>

          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.15rem)',
            color: '#475569',
            lineHeight: 1.65,
            maxWidth: '760px',
            margin: '0 auto 2.5rem'
          }}>
            Empowering institutions to author high-stakes examinations, manage student rosters with bulk Excel import, prevent academic dishonesty with real-time 5-strike tab enforcement, and evaluate thousands of candidates with instant scorecards.
          </p>

          {/* Action Buttons */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
            marginBottom: '2.5rem'
          }}>
            <Link
              to="/login"
              className="btn btn-primary btn-lg"
              style={{
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '1rem',
                padding: '0.85rem 2rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                boxShadow: '0 4px 14px rgba(14, 165, 233, 0.35)'
              }}
            >
              Sign In to Portal
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Hero Feature Badges */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2rem',
            flexWrap: 'wrap',
            fontSize: '0.85rem',
            color: '#64748B',
            fontWeight: 600
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <CheckCircle2 size={16} color="#10B981" />
              <span>Bulk Excel/CSV Student Import</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <CheckCircle2 size={16} color="#10B981" />
              <span>5-Strike Anti-Cheat Auto-Submission</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <CheckCircle2 size={16} color="#10B981" />
              <span>Automated PDF Scorecards</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE FEATURES SECTION */}
      <section id="features" style={{ padding: '4rem 1.5rem', background: '#FFFFFF', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="badge badge-primary" style={{ marginBottom: '0.5rem' }}>Platform Architecture</span>
            <h2 style={{ fontSize: '2rem', color: '#0F172A', fontWeight: 800 }}>Complete Examination Lifecycle Management</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: '600px', margin: '0.5rem auto 0' }}>
              Engineered with institutional-grade security, live camera proctoring, and comprehensive candidate administration.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            <div className="glass-panel" style={{ padding: '1.75rem', borderRadius: '16px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#E0F2FE', color: '#0284C7', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <FileSpreadsheet size={24} />
              </div>
              <h3 style={{ fontSize: '1.2rem', color: '#0F172A', marginBottom: '0.5rem' }}>Student Management & Bulk Import</h3>
              <p style={{ color: '#64748B', fontSize: '0.875rem', lineHeight: 1.6 }}>
                Preload student rosters via Excel (.xlsx, .xls) and CSV. Automatic duplicate detection, row-level validation preview, and instant credential management without public registration hassles.
              </p>
            </div>

            <div className="glass-panel" style={{ padding: '1.75rem', borderRadius: '16px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#FEE2E2', color: '#DC2626', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <ShieldAlert size={24} />
              </div>
              <h3 style={{ fontSize: '1.2rem', color: '#0F172A', marginBottom: '0.5rem' }}>Real-time Anti-Cheat Proctoring</h3>
              <p style={{ color: '#64748B', fontSize: '0.875rem', lineHeight: 1.6 }}>
                Full-screen lockdown, window focus blur detection, and camera streaming via WebSockets. 5-strike warning auto-submission with full proctor audit logs.
              </p>
            </div>

            <div className="glass-panel" style={{ padding: '1.75rem', borderRadius: '16px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#DCFCE7', color: '#16A34A', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Award size={24} />
              </div>
              <h3 style={{ fontSize: '1.2rem', color: '#0F172A', marginBottom: '0.5rem' }}>Instant Evaluation & PDF Certificates</h3>
              <p style={{ color: '#64748B', fontSize: '0.875rem', lineHeight: 1.6 }}>
                Single-choice and multi-select scoring, negative marking penalties, question explanations, and downloadable institutional PDF scorecards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FAQ SECTION */}
      <section id="faq" style={{ padding: '4rem 1.5rem', background: '#F8FAFC' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="badge badge-primary" style={{ marginBottom: '0.5rem' }}>Common Inquiries</span>
            <h2 style={{ fontSize: '2rem', color: '#0F172A', fontWeight: 800 }}>Frequently Asked Questions</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid rgba(15, 23, 42, 0.09)',
                    borderRadius: '12px',
                    overflow: 'hidden'
                  }}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    style={{
                      width: '100%',
                      padding: '1.25rem 1.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      background: 'transparent',
                      border: 'none',
                      textAlign: 'left',
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: isOpen ? '#0284C7' : '#0F172A',
                      cursor: 'pointer'
                    }}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown size={18} color="#64748B" style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s',
                      flexShrink: 0
                    }} />
                  </button>
                  {isOpen && (
                    <div style={{
                      padding: '0 1.5rem 1.25rem',
                      color: '#475569',
                      fontSize: '0.925rem',
                      lineHeight: 1.6,
                      borderTop: '1px solid #F1F5F9'
                    }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer style={{
        background: '#0F172A',
        color: '#94A3B8',
        padding: '3rem 1.5rem 2rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        fontSize: '0.875rem'
      }}>
        <div style={{
          maxWidth: '1240px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              background: '#0EA5E9',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF'
            }}>
              <GraduationCap size={18} />
            </div>
            <span style={{ fontSize: '1.2rem', fontWeight: 900, fontFamily: 'Outfit', color: '#FFFFFF' }}>
              GLB <span style={{ color: '#0EA5E9' }}>EXAMSPHERE</span>
            </span>
          </div>

          <div>
            &copy; {new Date().getFullYear()} GLB EXAMSPHERE. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
