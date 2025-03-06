import { useState } from 'react';
import { Nav, Button } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import PropTypes from "prop-types";

import { 
  LayoutDashboard,
  Users,
  Calendar,
  MessageSquare,
  Settings,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: Users, label: 'Team', path: '/team' },
  { icon: Calendar, label: 'Calendar', path: '/calendar' },
  { icon: MessageSquare, label: 'Messages', path: '/messages' },
  { icon: Settings, label: 'Settings', path: '/settings' }
];

function SideBar({ user }) {
  const [expanded, setExpanded] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div 
      className={`d-flex flex-column flex-shrink-0 bg-dark text-white transition-all ${
        expanded ? 'w-280' : 'w-100'
      }`}
      style={{ 
        minHeight: '100vh',
        transition: 'width 0.3s ease'
      }}
    >
      <div className="d-flex align-items-center justify-content-between p-3">
        <div className={`d-flex align-items-center gap-2 ${!expanded && 'justify-content-center w-100'}`}>
          <LayoutDashboard size={28} className="text-primary" />
          {expanded && <span className="fs-4 fw-bold">Dashboard</span>}
        </div>
        <Button 
          variant="dark"
          onClick={() => setExpanded(!expanded)}
          className="border-0 p-1"
        >
          {expanded ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </Button>
      </div>

      <Nav className="flex-column mt-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Nav.Link
              key={item.path}
              className={`
                d-flex align-items-center gap-3 p-3
                ${isActive ? 'bg-primary bg-opacity-25 text-white' : 'text-white-50'}
                ${!expanded && 'justify-content-center'}
              `}
              onClick={() => navigate(item.path)}
            >
              <Icon size={20} />
              {expanded && <span>{item.label}</span>}
            </Nav.Link>
          );
        })}
      </Nav>

      <div className="mt-auto border-top border-secondary p-3">
        <div className={`d-flex align-items-center gap-3 ${!expanded && 'justify-content-center'}`}>
          <img
            src={user.avatarUrl}
            alt={`${user.name}'s profile`}
            className="rounded-circle"
            style={{ width: '40px', height: '40px' }}
          />
          {expanded && (
            <div>
              <p className="mb-0 fw-medium">{user.name}</p>
              <small className="text-white-50">{user.email}</small>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
  SideBar.propTypes = {
    user: PropTypes.string,
    avatarUrl: PropTypes.string.isRequired, // avatarUrl est requis
    }


export default SideBar;