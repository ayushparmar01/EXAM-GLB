import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  GraduationCap,
  ShieldCheck,
  ShieldAlert,
  Clock,
  Lock,
  CheckCircle2,
  ArrowRight,
  Eye,
  Users,
  Award,
  BookOpen,
  FileSpreadsheet,
  FileText,
  ChevronDown,
  Layers,
  Building2,
  Check,
  LogIn,
  Menu,
  X,
  Sparkles,
  Calendar,
  Camera,
  Activity,
  BarChart3
} from 'lucide-react';

const LandingPage = () => {
  const { isAuthenticated, role } = useAuth();
  const navigate = useNavigate();

  const [activeFaq, setActiveFaq] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleFaq = (index) => {
    setActiveFaq((prev) => (prev === index ? null : index));
  };

  const dashboardPath = role === 'ADMIN' ? '/admin/dashboard' : (role === 'TEACHER' ? '/teacher/dashboard' : '/student/dashboard');

  const faqs = [
    {
      q: 'How does GLB ExamSphere control student access?',
      a: 'Student accounts are pre-provisioned and managed by the college administration. Students authenticate securely using their verified institutional Google account without needing separate platform passwords.'
    },
    {
      q: 'How are online examinations monitored?',
      a: 'GLB ExamSphere monitors assessments with real-time proctoring telemetry, camera and microphone activity, browser tab-switch detection, and structured event logging with live instructor intervention tools.'
    },
    {
      q: 'Can an exam be targeted to a specific branch or semester?',
      a: 'Yes. Examination targeting supports the entire college, specific academic years, branches, semesters, sections, batches, or any precise combination of academic groups with server-side eligibility enforcement.'
    },
    {
      q: 'How are results and certificates generated?',
      a: 'Evaluation executes automatically upon submission against verified answer keys, generating instant scorecards, detailed question breakdowns, performance metrics, and official downloadable PDF result certificates.'
    },
    {
      q: 'Who can manage examinations and student records?',
      a: 'Authorized college administrators manage student rosters and academic structure, while faculty instructors create assessments, curate question banks, and monitor live attempts from their instructor consoles.'
    }
  ];

  return (
    <div style={{ background: '#F8FAFC', color: '#0F172A', minHeight: '100vh', overflowX: 'hidden' }}>
      
      {/* 1. TOP INSTITUTIONAL NAVIGATION BAR */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: '#0F172A',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '0.85rem 2rem',
        boxShadow: '0 2px 12px rgba(15, 23, 42, 0.2)'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem'
        }}>
          {/* Logo & Institution Branding */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: '#0EA5E9',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              boxShadow: '0 2px 10px rgba(14, 165, 233, 0.4)',
              flexShrink: 0
            }}>
              <GraduationCap size={24} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <span style={{ fontSize: '1.2rem', fontWeight: 900, fontFamily: 'Outfit', letterSpacing: '-0.02em', color: '#FFFFFF', lineHeight: 1 }}>
                  GLB <span style={{ color: '#0EA5E9' }}>ExamSphere</span>
                </span>
              </div>
              <div style={{ fontSize: '0.72rem', color: '#94A3B8', marginTop: '2px' }}>
                GL Bajaj Group of Institutions, Mathura
              </div>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <a href="#features" style={{ fontSize: '0.875rem', color: '#CBD5E1', fontWeight: 600, textDecoration: 'none', transition: 'color 0.2s' }}
               onMouseEnter={(e) => (e.target.style.color = '#38BDF8')}
               onMouseLeave={(e) => (e.target.style.color = '#CBD5E1')}>Features</a>
            <a href="#academics" style={{ fontSize: '0.875rem', color: '#CBD5E1', fontWeight: 600, textDecoration: 'none', transition: 'color 0.2s' }}
               onMouseEnter={(e) => (e.target.style.color = '#38BDF8')}
               onMouseLeave={(e) => (e.target.style.color = '#CBD5E1')}>Academic Structure</a>
            <a href="#security" style={{ fontSize: '0.875rem', color: '#CBD5E1', fontWeight: 600, textDecoration: 'none', transition: 'color 0.2s' }}
               onMouseEnter={(e) => (e.target.style.color = '#38BDF8')}
               onMouseLeave={(e) => (e.target.style.color = '#CBD5E1')}>Security</a>
            <a href="#faq" style={{ fontSize: '0.875rem', color: '#CBD5E1', fontWeight: 600, textDecoration: 'none', transition: 'color 0.2s' }}
               onMouseEnter={(e) => (e.target.style.color = '#38BDF8')}
               onMouseLeave={(e) => (e.target.style.color = '#CBD5E1')}>FAQ</a>
          </nav>

          {/* Right Action Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            {isAuthenticated ? (
              <button
                onClick={() => navigate(dashboardPath)}
                className="btn btn-primary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.55rem 1.15rem',
                  fontSize: '0.875rem',
                  fontWeight: 700
                }}
              >
                <span>Portal Dashboard</span>
                <ArrowRight size={15} />
              </button>
            ) : (
              <Link
                to="/login"
                className="btn btn-primary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.55rem 1.25rem',
                  fontSize: '0.875rem',
                  fontWeight: 700
                }}
              >
                <LogIn size={15} />
                <span>Student Login →</span>
              </Link>
            )}

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-toggle"
              style={{
                background: 'transparent',
                border: 'none',
                color: '#CBD5E1',
                cursor: 'pointer',
                display: 'none',
                padding: '0.25rem'
              }}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div style={{
            background: '#0F172A',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '1rem 0',
            marginTop: '0.75rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem'
          }}>
            <a href="#features" onClick={() => setMobileMenuOpen(false)} style={{ color: '#CBD5E1', padding: '0.5rem 1rem', textDecoration: 'none', fontWeight: 600 }}>Features</a>
            <a href="#academics" onClick={() => setMobileMenuOpen(false)} style={{ color: '#CBD5E1', padding: '0.5rem 1rem', textDecoration: 'none', fontWeight: 600 }}>Academic Structure</a>
            <a href="#security" onClick={() => setMobileMenuOpen(false)} style={{ color: '#CBD5E1', padding: '0.5rem 1rem', textDecoration: 'none', fontWeight: 600 }}>Security</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} style={{ color: '#CBD5E1', padding: '0.5rem 1rem', textDecoration: 'none', fontWeight: 600 }}>FAQ</a>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION */}
      <section style={{
        padding: '5rem 2rem 4rem',
        background: 'radial-gradient(ellipse at 50% 0%, rgba(14, 165, 233, 0.08) 0%, rgba(248, 250, 252, 1) 70%)',
        borderBottom: '1px solid #E2E8F0'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1.15fr 0.85fr',
          gap: '3.5rem',
          alignItems: 'center'
        }}>
          <div>
            {/* Small Institutional Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.35rem 0.85rem',
              borderRadius: '9999px',
              background: '#FFFFFF',
              border: '1px solid #BAE6FD',
              color: '#0284C7',
              fontSize: '0.78rem',
              fontWeight: 700,
              letterSpacing: '0.04em',
              marginBottom: '1.25rem',
              boxShadow: '0 1px 3px rgba(14, 165, 233, 0.1)'
            }}>
              <Building2 size={14} color="#0284C7" />
              <span>GL BAJAJ GROUP OF INSTITUTIONS · MATHURA</span>
            </div>

            {/* Main Heading */}
            <h1 style={{
              fontSize: 'clamp(2.4rem, 4vw, 3.4rem)',
              lineHeight: 1.15,
              fontWeight: 800,
              color: '#0F172A',
              marginBottom: '1.25rem'
            }}>
              Secure Digital Examinations <br />
              <span style={{ color: '#0284C7' }}>for GL Bajaj</span>
            </h1>

            {/* Supporting Text */}
            <p style={{
              fontSize: '1.15rem',
              color: '#334155',
              fontWeight: 600,
              lineHeight: 1.5,
              marginBottom: '0.75rem'
            }}>
              A centralized platform for conducting, monitoring, and evaluating online examinations.
            </p>

            {/* Additional Description */}
            <p style={{
              fontSize: '0.975rem',
              color: '#64748B',
              lineHeight: 1.6,
              maxWidth: '600px',
              marginBottom: '2rem'
            }}>
              Built for the academic examination workflow of GL Bajaj Group of Institutions, Mathura — from student management and exam creation to live proctoring, evaluation, and result certificates.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
              <Link
                to="/login"
                className="btn btn-primary"
                style={{
                  padding: '0.85rem 1.75rem',
                  fontSize: '1rem',
                  fontWeight: 700,
                  boxShadow: '0 4px 14px rgba(14, 165, 233, 0.35)'
                }}
              >
                <span>Enter Examination Portal →</span>
              </Link>

              <a
                href="#features"
                className="btn btn-secondary"
                style={{
                  padding: '0.85rem 1.75rem',
                  fontSize: '1rem',
                  fontWeight: 600,
                  background: '#FFFFFF'
                }}
              >
                <span>Explore Platform</span>
              </a>
            </div>

            {/* 3 HERO TRUST POINTS */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '1.25rem',
              borderTop: '1px solid #E2E8F0',
              paddingTop: '1.75rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#E0F2FE', color: '#0284C7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Users size={18} />
                </div>
                <div style={{ fontSize: '0.825rem', fontWeight: 700, color: '#1E293B', lineHeight: 1.3 }}>
                  Admin-Controlled <br /><span style={{ fontWeight: 500, color: '#64748B' }}>Student Access</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#FEF3C7', color: '#D97706', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <ShieldCheck size={18} />
                </div>
                <div style={{ fontSize: '0.825rem', fontWeight: 700, color: '#1E293B', lineHeight: 1.3 }}>
                  Live Proctoring & <br /><span style={{ fontWeight: 500, color: '#64748B' }}>Exam Integrity</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#DCFCE7', color: '#16A34A', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Award size={18} />
                </div>
                <div style={{ fontSize: '0.825rem', fontWeight: 700, color: '#1E293B', lineHeight: 1.3 }}>
                  Instant Results & <br /><span style={{ fontWeight: 500, color: '#64748B' }}>PDF Certificates</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Visual Mockup */}
          <div style={{ position: 'relative' }}>
            <div style={{
              background: '#FFFFFF',
              borderRadius: '20px',
              border: '1px solid #CBD5E1',
              boxShadow: '0 20px 40px -10px rgba(15, 23, 42, 0.12), 0 0 25px rgba(14, 165, 233, 0.08)',
              padding: '1.75rem',
              position: 'relative'
            }}>
              {/* Mockup Top Browser Bar */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #E2E8F0', paddingBottom: '1rem', marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#EF4444' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#F59E0B' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10B981' }} />
                  <span style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 600, marginLeft: '0.5rem' }}>
                    GLB ExamSphere · Assessment Engine v2.4
                  </span>
                </div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', background: '#FEF2F2', border: '1px solid #FECACA', color: '#DC2626', padding: '0.2rem 0.55rem', borderRadius: '6px', fontSize: '0.7rem', fontWeight: 700 }}>
                  <Activity size={12} className="animate-pulse" />
                  <span>PROCTORING ACTIVE</span>
                </div>
              </div>

              {/* Assessment Question Preview Card */}
              <div style={{ background: '#F8FAFC', borderRadius: '12px', padding: '1.25rem', border: '1px solid #E2E8F0', marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0284C7', textTransform: 'uppercase' }}>
                    Question 14 of 50 · Operating Systems
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#0F172A', fontWeight: 700, fontSize: '0.85rem' }}>
                    <Clock size={14} color="#0284C7" />
                    <span>42:18 remaining</span>
                  </div>
                </div>
                <p style={{ fontSize: '0.9rem', fontWeight: 600, color: '#0F172A', lineHeight: 1.45, marginBottom: '1rem' }}>
                  Which scheduling algorithm allocates the CPU first to the process that requests it using a FIFO queue?
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <div style={{ padding: '0.55rem 0.85rem', borderRadius: '8px', background: '#FFFFFF', border: '1.5px solid #0EA5E9', color: '#0369A1', fontSize: '0.825rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={15} color="#0EA5E9" />
                    <span>A. First-Come, First-Served (FCFS) Scheduling</span>
                  </div>
                  <div style={{ padding: '0.55rem 0.85rem', borderRadius: '8px', background: '#FFFFFF', border: '1px solid #E2E8F0', color: '#475569', fontSize: '0.825rem' }}>
                    <span>B. Shortest Job Next (SJN)</span>
                  </div>
                </div>
              </div>

              {/* Live Telemetry Sensor Bar */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
                <div style={{ background: '#F1F5F9', borderRadius: '8px', padding: '0.65rem', textAlign: 'center', border: '1px solid #E2E8F0' }}>
                  <div style={{ fontSize: '0.7rem', color: '#64748B', fontWeight: 600 }}>Camera Telemetry</div>
                  <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#16A34A', marginTop: '2px' }}>● Face Centered</div>
                </div>
                <div style={{ background: '#F1F5F9', borderRadius: '8px', padding: '0.65rem', textAlign: 'center', border: '1px solid #E2E8F0' }}>
                  <div style={{ fontSize: '0.7rem', color: '#64748B', fontWeight: 600 }}>Audio Telemetry</div>
                  <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#16A34A', marginTop: '2px' }}>● Ambient Normal</div>
                </div>
                <div style={{ background: '#F1F5F9', borderRadius: '8px', padding: '0.65rem', textAlign: 'center', border: '1px solid #E2E8F0' }}>
                  <div style={{ fontSize: '0.7rem', color: '#64748B', fontWeight: 600 }}>Browser Focus</div>
                  <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#16A34A', marginTop: '2px' }}>● Fullscreen Locked</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. COLLEGE INFORMATION STRIP */}
      <section style={{
        background: '#FFFFFF',
        borderBottom: '1px solid #E2E8F0',
        padding: '1.75rem 2rem'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.5rem',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: '#F1F5F9', color: '#0284C7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Building2 size={20} />
            </div>
            <div>
              <div style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 600, textTransform: 'uppercase' }}>Established</div>
              <div style={{ fontSize: '1rem', fontWeight: 800, color: '#0F172A' }}>2009</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: '#F1F5F9', color: '#0284C7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ShieldCheck size={20} />
            </div>
            <div>
              <div style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 600, textTransform: 'uppercase' }}>Approved By</div>
              <div style={{ fontSize: '1rem', fontWeight: 800, color: '#0F172A' }}>AICTE</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: '#F1F5F9', color: '#0284C7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <GraduationCap size={20} />
            </div>
            <div>
              <div style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 600, textTransform: 'uppercase' }}>Affiliated To</div>
              <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0F172A', lineHeight: 1.2 }}>Dr. A.P.J. Abdul Kalam Technical University</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: '#F1F5F9', color: '#0284C7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <BookOpen size={20} />
            </div>
            <div>
              <div style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 600, textTransform: 'uppercase' }}>Academic Programs</div>
              <div style={{ fontSize: '1rem', fontWeight: 800, color: '#0F172A' }}>B.Tech & MBA</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PLATFORM FEATURES (COMPLETE EXAMINATION LIFECYCLE) */}
      <section id="features" style={{ padding: '5rem 2rem', background: '#F8FAFC' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#0284C7', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>
              Institutional Capabilities
            </div>
            <h2 style={{ fontSize: '2.25rem', color: '#0F172A', marginBottom: '0.75rem' }}>
              Complete Examination Lifecycle
            </h2>
            <p style={{ color: '#64748B', fontSize: '1.05rem', maxWidth: '650px', margin: '0 auto' }}>
              One platform for the academic examination workflow at GL Bajaj.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.75rem' }}>
            {/* Card 1 */}
            <div className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: '#E0F2FE', color: '#0284C7', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Users size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#0F172A', marginBottom: '0.75rem' }}>
                1. Student Management
              </h3>
              <p style={{ color: '#64748B', fontSize: '0.925rem', lineHeight: 1.6 }}>
                Admin-controlled student records, bulk Excel/CSV import, academic grouping, and secure account access.
              </p>
            </div>

            {/* Card 2 */}
            <div className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: '#E0E7FF', color: '#4F46E5', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <FileText size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#0F172A', marginBottom: '0.75rem' }}>
                2. Online Examinations
              </h3>
              <p style={{ color: '#64748B', fontSize: '0.925rem', lineHeight: 1.6 }}>
                Create scheduled assessments, manage questions, target eligible students, and control exam access.
              </p>
            </div>

            {/* Card 3 */}
            <div className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: '#FEF3C7', color: '#D97706', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Camera size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#0F172A', marginBottom: '0.75rem' }}>
                3. Live Proctoring
              </h3>
              <p style={{ color: '#64748B', fontSize: '0.925rem', lineHeight: 1.6 }}>
                Real-time examination monitoring with camera, microphone, browser-focus, and structured proctoring telemetry.
              </p>
            </div>

            {/* Card 4 */}
            <div className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: '#DCFCE7', color: '#16A34A', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Award size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#0F172A', marginBottom: '0.75rem' }}>
                4. Evaluation & Results
              </h3>
              <p style={{ color: '#64748B', fontSize: '0.925rem', lineHeight: 1.6 }}>
                Automated evaluation, result records, verification details, and downloadable PDF certificates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ACADEMIC STRUCTURE SECTION */}
      <section id="academics" style={{ padding: '5rem 2rem', background: '#FFFFFF', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#0284C7', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>
              Institutional Hierarchy
            </div>
            <h2 style={{ fontSize: '2.25rem', color: '#0F172A', marginBottom: '0.75rem' }}>
              Built Around GL Bajaj's Academic Structure
            </h2>
            <p style={{ color: '#64748B', fontSize: '1.05rem', maxWidth: '650px', margin: '0 auto' }}>
              Structured targeting ensuring students only receive exams intended for their department.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.25rem', marginBottom: '2.5rem' }}>
            <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '14px', padding: '1.5rem 1.25rem', textAlign: 'center' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: '#E0F2FE', color: '#0284C7', margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Calendar size={20} />
              </div>
              <h4 style={{ fontSize: '1.05rem', color: '#0F172A', marginBottom: '0.25rem' }}>Academic Years</h4>
              <span style={{ fontSize: '0.78rem', color: '#64748B' }}>e.g. 2026-27</span>
            </div>

            <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '14px', padding: '1.5rem 1.25rem', textAlign: 'center' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: '#E0F2FE', color: '#0284C7', margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Layers size={20} />
              </div>
              <h4 style={{ fontSize: '1.05rem', color: '#0F172A', marginBottom: '0.25rem' }}>Branches</h4>
              <span style={{ fontSize: '0.78rem', color: '#64748B' }}>CSE, AIML, ECE, ME</span>
            </div>

            <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '14px', padding: '1.5rem 1.25rem', textAlign: 'center' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: '#E0F2FE', color: '#0284C7', margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Clock size={20} />
              </div>
              <h4 style={{ fontSize: '1.05rem', color: '#0F172A', marginBottom: '0.25rem' }}>Semesters</h4>
              <span style={{ fontSize: '0.78rem', color: '#64748B' }}>Semester 1 to 8</span>
            </div>

            <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '14px', padding: '1.5rem 1.25rem', textAlign: 'center' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: '#E0F2FE', color: '#0284C7', margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Users size={20} />
              </div>
              <h4 style={{ fontSize: '1.05rem', color: '#0F172A', marginBottom: '0.25rem' }}>Sections</h4>
              <span style={{ fontSize: '0.78rem', color: '#64748B' }}>Section A, B, C</span>
            </div>

            <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '14px', padding: '1.5rem 1.25rem', textAlign: 'center' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: '#E0F2FE', color: '#0284C7', margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <GraduationCap size={20} />
              </div>
              <h4 style={{ fontSize: '1.05rem', color: '#0F172A', marginBottom: '0.25rem' }}>Batches</h4>
              <span style={{ fontSize: '0.78rem', color: '#64748B' }}>2023-2027, 2024-2028</span>
            </div>

            <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '14px', padding: '1.5rem 1.25rem', textAlign: 'center' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: '#E0F2FE', color: '#0284C7', margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <BookOpen size={20} />
              </div>
              <h4 style={{ fontSize: '1.05rem', color: '#0F172A', marginBottom: '0.25rem' }}>Subjects</h4>
              <span style={{ fontSize: '0.78rem', color: '#64748B' }}>Course Curriculum</span>
            </div>
          </div>

          <div style={{
            background: 'rgba(14, 165, 233, 0.06)',
            border: '1px solid rgba(14, 165, 233, 0.25)',
            borderRadius: '12px',
            padding: '1.25rem 1.5rem',
            textAlign: 'center',
            maxWidth: '850px',
            margin: '0 auto',
            color: '#0369A1',
            fontSize: '0.95rem',
            fontWeight: 600,
            lineHeight: 1.5
          }}>
            Exam eligibility is determined from the student's registered academic information and the examination's configured target.
          </div>
        </div>
      </section>

      {/* 6. SECURITY SECTION */}
      <section id="security" style={{ padding: '5rem 2rem', background: '#F8FAFC' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#0284C7', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>
              Security & Compliance
            </div>
            <h2 style={{ fontSize: '2.25rem', color: '#0F172A', marginBottom: '0.75rem' }}>
              Secure Examination Experience
            </h2>
            <p style={{ color: '#64748B', fontSize: '1.05rem', maxWidth: '650px', margin: '0 auto' }}>
              Architected for academic integrity, data isolation, and audit readiness.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div className="glass-card" style={{ padding: '2.25rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#E0F2FE', color: '#0284C7', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Lock size={22} />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#0F172A', marginBottom: '0.65rem' }}>
                Identity & Access
              </h3>
              <p style={{ color: '#64748B', fontSize: '0.925rem', lineHeight: 1.6 }}>
                Verified student access and role-based permissions.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '2.25rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#FEF3C7', color: '#D97706', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <ShieldCheck size={22} />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#0F172A', marginBottom: '0.65rem' }}>
                Exam Integrity
              </h3>
              <p style={{ color: '#64748B', fontSize: '0.925rem', lineHeight: 1.6 }}>
                Server-side exam eligibility, attempt controls, and structured proctoring telemetry.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '2.25rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#DCFCE7', color: '#16A34A', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Award size={22} />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#0F172A', marginBottom: '0.65rem' }}>
                Result Security
              </h3>
              <p style={{ color: '#64748B', fontSize: '0.925rem', lineHeight: 1.6 }}>
                Protected result ownership and controlled certificate access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS */}
      <section id="faq" style={{ padding: '5rem 2rem', background: '#FFFFFF', borderTop: '1px solid #E2E8F0' }}>
        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#0284C7', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>
              Got Questions?
            </div>
            <h2 style={{ fontSize: '2.25rem', color: '#0F172A', marginBottom: '0.75rem' }}>
              Frequently Asked Questions
            </h2>
            <p style={{ color: '#64748B', fontSize: '1.05rem' }}>
              Common answers regarding GLB ExamSphere platform capabilities.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  style={{
                    background: '#F8FAFC',
                    border: '1px solid #E2E8F0',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    transition: 'all 0.2s'
                  }}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    style={{
                      width: '100%',
                      padding: '1.25rem 1.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      background: 'transparent',
                      border: 'none',
                      textAlign: 'left',
                      cursor: 'pointer',
                      color: '#0F172A',
                      fontWeight: 700,
                      fontSize: '1rem'
                    }}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={18}
                      color="#0284C7"
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s',
                        flexShrink: 0
                      }}
                    />
                  </button>

                  {isOpen && (
                    <div style={{ padding: '0 1.5rem 1.25rem', color: '#64748B', fontSize: '0.925rem', lineHeight: 1.6 }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer style={{
        background: '#0F172A',
        color: '#FFFFFF',
        padding: '4rem 2rem 2.5rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem'
        }}>
          {/* Institutional Bio */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#0EA5E9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF' }}>
                <GraduationCap size={20} />
              </div>
              <span style={{ fontSize: '1.2rem', fontWeight: 900, fontFamily: 'Outfit', color: '#FFF' }}>
                GLB <span style={{ color: '#0EA5E9' }}>ExamSphere</span>
              </span>
            </div>
            <p style={{ color: '#94A3B8', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1rem' }}>
              Digital Examination & Assessment Platform
            </p>
            <p style={{ color: '#64748B', fontSize: '0.8rem', lineHeight: 1.5 }}>
              GL Bajaj Group of Institutions, Mathura<br />
              NH-2, Mathura-Delhi Road, Mathura, Uttar Pradesh
            </p>
          </div>

          {/* Platform Links */}
          <div>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#F8FAFC', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '1.25rem' }}>
              Platform
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.875rem', color: '#94A3B8' }}>
              <li><a href="#features" style={{ color: 'inherit', textDecoration: 'none' }}>Examinations</a></li>
              <li><Link to="/login" style={{ color: 'inherit', textDecoration: 'none' }}>Student Portal</Link></li>
              <li><a href="#security" style={{ color: 'inherit', textDecoration: 'none' }}>Security & Integrity</a></li>
              <li><a href="#academics" style={{ color: 'inherit', textDecoration: 'none' }}>Academic Structure</a></li>
            </ul>
          </div>

          {/* Quick Access */}
          <div>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#F8FAFC', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '1.25rem' }}>
              Portals
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.875rem', color: '#94A3B8' }}>
              <li><Link to="/login" style={{ color: 'inherit', textDecoration: 'none' }}>Student Login</Link></li>
              <li><Link to="/login" style={{ color: 'inherit', textDecoration: 'none' }}>Faculty Console</Link></li>
              <li><Link to="/login" style={{ color: 'inherit', textDecoration: 'none' }}>Admin Console</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#F8FAFC', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '1.25rem' }}>
              Support & Legal
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.875rem', color: '#94A3B8' }}>
              <li><a href="#faq" style={{ color: 'inherit', textDecoration: 'none' }}>Support Desk</a></li>
              <li><a href="#security" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</a></li>
              <li><a href="#faq" style={{ color: 'inherit', textDecoration: 'none' }}>Examination Guidelines</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          paddingTop: '1.75rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          maxWidth: '1280px',
          margin: '0 auto',
          fontSize: '0.8rem',
          color: '#64748B'
        }}>
          <div>
            © {new Date().getFullYear()} GL Bajaj Group of Institutions, Mathura. All rights reserved.
          </div>
          <div>
            GLB ExamSphere Engine v2.4 • 256-bit Encrypted
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
