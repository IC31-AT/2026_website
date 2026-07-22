/* @ds-bundle: {"format":3,"namespace":"AgencyTechDesignSystem_abd4b2","components":[{"name":"Alert","sourcePath":"components/core/Alert.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Checkbox","sourcePath":"components/core/Checkbox.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Radio","sourcePath":"components/core/Radio.jsx"},{"name":"Select","sourcePath":"components/core/Select.jsx"},{"name":"Switch","sourcePath":"components/core/Switch.jsx"},{"name":"Tabs","sourcePath":"components/core/Tabs.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Tooltip","sourcePath":"components/core/Tooltip.jsx"}],"sourceHashes":{"components/core/Alert.jsx":"18e289d12b07","components/core/Avatar.jsx":"83e6af8cb940","components/core/Badge.jsx":"94da74b7ab69","components/core/Button.jsx":"8c4437654a4f","components/core/Card.jsx":"352e39efb188","components/core/Checkbox.jsx":"0d6e90cec10f","components/core/Eyebrow.jsx":"777869366f64","components/core/IconButton.jsx":"cec947ae042e","components/core/Input.jsx":"75f396161f04","components/core/Radio.jsx":"f22c1627e1bc","components/core/Select.jsx":"a3e020ecaeec","components/core/Switch.jsx":"3781210f5896","components/core/Tabs.jsx":"49dc906ac09d","components/core/Tag.jsx":"c4d75fd4a15d","components/core/Tooltip.jsx":"ebb5a2fc6764","ui_kits/dashboard/DashboardScreen.jsx":"721c12b991af","ui_kits/dashboard/LoginScreen.jsx":"8cc4d28666b1","ui_kits/dashboard/PlaceholderScreen.jsx":"a71a6e16c680","ui_kits/dashboard/Sidebar.jsx":"df6438e41dca","ui_kits/dashboard/Topbar.jsx":"239160035e12"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AgencyTechDesignSystem_abd4b2 = window.AgencyTechDesignSystem_abd4b2 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Alert.jsx
try { (() => {
// Each tone: `bar` = title-bar + border colour (dark), `body` = soft light body fill.
const TONES = {
  info: {
    bar: 'var(--at-cyprus)',
    body: 'var(--status-info-soft)',
    icon: 'info'
  },
  success: {
    bar: 'var(--status-success-strong)',
    body: 'var(--status-success-soft)',
    icon: 'check-circle'
  },
  warning: {
    bar: 'var(--status-warning-strong)',
    body: 'var(--status-warning-soft)',
    icon: 'alert-triangle'
  },
  danger: {
    bar: 'var(--status-danger-strong)',
    body: 'var(--status-danger-soft)',
    icon: 'alert-circle'
  }
};

/** Inline alert / callout. A tone-coloured title bar sits over a light body,
 *  the whole thing wrapped in a single tone-coloured border. */
function Alert({
  tone = 'info',
  title,
  children,
  style = {}
}) {
  const t = TONES[tone] || TONES.info;

  // Titled variant: dark bar + light body inside one border.
  if (title) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        borderRadius: 'var(--radius-md)',
        border: `1px solid ${t.bar}`,
        overflow: 'hidden',
        fontFamily: 'var(--font-sans)',
        ...style
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '10px 14px',
        background: t.bar,
        color: 'var(--at-white)'
      }
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": t.icon,
      style: {
        width: 17,
        height: 17,
        flex: 'none'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-heading)',
        fontWeight: 'var(--fw-semibold)',
        fontSize: 14,
        lineHeight: 1.3
      }
    }, title)), children && /*#__PURE__*/React.createElement("div", {
      style: {
        background: t.body,
        color: 'var(--text-body)',
        padding: '13px 15px',
        fontSize: 14,
        lineHeight: 1.55
      }
    }, children));
  }

  // Untitled variant: light body with an inline icon, same border + fill.
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      padding: '12px 14px',
      borderRadius: 'var(--radius-md)',
      background: t.body,
      border: `1px solid ${t.bar}`,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": t.icon,
    style: {
      color: t.bar,
      width: 18,
      height: 18,
      flex: 'none',
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: 1.55,
      color: 'var(--text-body)'
    }
  }, children));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Alert.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
/** Avatar — circular. Image or initials, brand-tinted fallback. */
function Avatar({
  src,
  name = '',
  size = 40,
  style = {}
}) {
  const initials = name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      borderRadius: '50%',
      overflow: 'hidden',
      background: 'var(--at-cyprus)',
      color: 'var(--at-turquoise-light)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: size * 0.4,
      flex: 'none',
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials || '?');
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
const TONES = {
  neutral: {
    bg: 'var(--surface-subtle)',
    fg: 'var(--text-muted)',
    bd: 'var(--border-default)'
  },
  brand: {
    bg: '#d5f0ef',
    fg: 'var(--at-turquoise)',
    bd: 'transparent'
  },
  success: {
    bg: 'var(--status-success-bg)',
    fg: 'var(--status-success-strong)',
    bd: 'transparent'
  },
  warning: {
    bg: 'var(--status-warning-bg)',
    fg: 'var(--status-warning-strong)',
    bd: 'transparent'
  },
  danger: {
    bg: 'var(--status-danger-bg)',
    fg: 'var(--status-danger-strong)',
    bd: 'transparent'
  },
  purple: {
    bg: 'var(--at-purple-tint)',
    fg: 'var(--at-purple-shade)',
    bd: 'transparent'
  }
};

/** Small status/label pill. Solid subtle fill by tone. */
function Badge({
  children,
  tone = 'neutral',
  dot = false,
  style = {}
}) {
  const t = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '2px 10px',
      fontSize: 12,
      fontWeight: 600,
      lineHeight: 1.6,
      fontFamily: 'var(--font-sans)',
      borderRadius: 'var(--radius-pill)',
      background: t.bg,
      color: t.fg,
      border: `1px solid ${t.bd}`,
      ...style
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: t.fg
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * AgencyTech Button. Turquoise primary, Cyprus/outline/ghost variants.
 * Corner rounding uses rounded-sm per brand guidelines. No scale on press.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  iconLeft = null,
  iconRight = null,
  onClick,
  type = 'button',
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '6px 12px',
      fontSize: 13,
      height: 32,
      gap: 6
    },
    md: {
      padding: '9px 16px',
      fontSize: 14,
      height: 40,
      gap: 8
    },
    lg: {
      padding: '12px 22px',
      fontSize: 15,
      height: 48,
      gap: 8
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    primary: {
      background: 'var(--accent)',
      color: '#fff',
      border: '2px solid var(--accent)'
    },
    secondary: {
      background: 'var(--at-cyprus)',
      color: '#fff',
      border: '2px solid var(--at-cyprus)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-heading)',
      border: '2px solid var(--border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-heading)',
      border: '2px solid transparent'
    },
    danger: {
      background: 'var(--status-danger)',
      color: '#fff',
      border: '2px solid var(--status-danger)'
    }
  };
  const v = variants[variant] || variants.primary;
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const hoverStyle = !disabled && hover ? {
    primary: {
      background: 'var(--accent-hover)',
      borderColor: 'var(--accent-hover)'
    },
    secondary: {
      background: 'var(--at-cyprus-light)',
      borderColor: 'var(--at-cyprus-light)'
    },
    outline: {
      background: 'var(--surface-subtle)'
    },
    ghost: {
      background: 'var(--surface-subtle)'
    },
    danger: {
      background: 'var(--status-danger-strong)',
      borderColor: 'var(--status-danger-strong)'
    }
  }[variant] : {};
  const activeStyle = !disabled && active && variant === 'primary' ? {
    background: 'var(--accent-press)',
    borderColor: 'var(--accent-press)'
  } : {};
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      padding: s.padding,
      minHeight: s.height,
      fontSize: s.fontSize,
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      lineHeight: 1,
      borderRadius: 'var(--radius-sm)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      width: fullWidth ? '100%' : 'auto',
      transition: 'background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard)',
      whiteSpace: 'nowrap',
      ...v,
      ...hoverStyle,
      ...activeStyle,
      ...style
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Surface card. White, 1px border, rounded-md, optional soft shadow.
 * variant="highlight" = grey bg per brand "highlighted section" pattern.
 */
function Card({
  children,
  variant = 'default',
  padding = 20,
  hoverable = false,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const base = {
    default: {
      background: 'var(--surface-card)',
      border: '2px solid var(--border-default)'
    },
    highlight: {
      background: 'var(--surface-subtle)',
      border: '2px solid var(--border-default)'
    },
    dark: {
      background: 'var(--surface-dark)',
      border: '2px solid var(--border-on-dark)',
      color: '#fff'
    },
    elevated: {
      background: 'var(--surface-card)',
      border: '2px solid var(--border-default)',
      boxShadow: 'var(--shadow-md)'
    }
  }[variant] || {};
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      borderRadius: 'var(--radius-md)',
      padding,
      fontFamily: 'var(--font-sans)',
      transition: 'box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard)',
      ...base,
      ...(hoverable && hover ? {
        boxShadow: 'var(--shadow-md)',
        transform: 'translateY(-2px)'
      } : {}),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Checkbox.jsx
try { (() => {
/** Checkbox with label. Turquoise when checked. */
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  style = {}
}) {
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;
  const toggle = () => {
    if (disabled) return;
    if (!isControlled) setInternal(v => !v);
    onChange && onChange(!on);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--text-body)',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: toggle,
    style: {
      width: 18,
      height: 18,
      flex: 'none',
      borderRadius: 'var(--radius-sm)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: on ? 'var(--accent)' : '#fff',
      border: `1px solid ${on ? 'var(--accent)' : 'var(--border-strong)'}`,
      transition: 'background var(--dur-fast), border-color var(--dur-fast)'
    }
  }, on && /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 12 12",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2.5 6.2L4.8 8.5L9.5 3.5",
    stroke: "#fff",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
/** Eyebrow label — semibold, tracked, uppercase. Use sparingly above an H2. */
function Eyebrow({
  children,
  onDark = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-eyebrow)',
      fontWeight: 600,
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: onDark ? 'var(--text-accent-on-dark)' : 'var(--text-accent)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Icon-only button. Square, brand-rounded. Pass a Lucide <i data-lucide> or SVG child. */
function IconButton({
  children,
  label,
  variant = 'ghost',
  size = 'md',
  disabled = false,
  onClick,
  style = {},
  ...rest
}) {
  const dim = {
    sm: 32,
    md: 40,
    lg: 48
  }[size] || 40;
  const variants = {
    ghost: {
      background: 'transparent',
      color: 'var(--text-heading)',
      border: '2px solid transparent'
    },
    outline: {
      background: '#fff',
      color: 'var(--text-heading)',
      border: '2px solid var(--border-strong)'
    },
    primary: {
      background: 'var(--accent)',
      color: '#fff',
      border: '2px solid var(--accent)'
    }
  };
  const v = variants[variant] || variants.ghost;
  const [hover, setHover] = React.useState(false);
  const hoverStyle = !disabled && hover ? variant === 'primary' ? {
    background: 'var(--accent-hover)',
    borderColor: 'var(--accent-hover)'
  } : {
    background: 'var(--surface-subtle)'
  } : {};
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: dim,
      height: dim,
      borderRadius: 'var(--radius-sm)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'background var(--dur-fast) var(--ease-standard)',
      ...v,
      ...hoverStyle,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Text input with label + optional helper/error. Turquoise focus ring. */
function Input({
  label,
  helper,
  error,
  id,
  type = 'text',
  style = {},
  wrapStyle = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || (label ? `in-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-sans)',
      ...wrapStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-heading)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--text-body)',
      padding: '9px 12px',
      height: 40,
      boxSizing: 'border-box',
      background: '#fff',
      borderRadius: 'var(--radius-sm)',
      border: `2px solid ${error ? 'var(--status-danger)' : focus ? 'var(--accent)' : 'var(--border-strong)'}`,
      boxShadow: focus ? 'var(--shadow-focus)' : 'none',
      outline: 'none',
      transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)',
      ...style
    }
  }, rest)), (helper || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: error ? 'var(--status-danger)' : 'var(--text-muted)'
    }
  }, error || helper));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Radio.jsx
try { (() => {
/** Radio button with label. Use within a group sharing `name`. */
function Radio({
  label,
  name,
  value,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  style = {}
}) {
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;
  const select = () => {
    if (disabled) return;
    if (!isControlled) setInternal(true);
    onChange && onChange(value);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--text-body)',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: select,
    style: {
      width: 18,
      height: 18,
      flex: 'none',
      borderRadius: '50%',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#fff',
      border: `1px solid ${on ? 'var(--accent)' : 'var(--border-strong)'}`,
      transition: 'border-color var(--dur-fast)'
    }
  }, on && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: 'var(--accent)'
    }
  })), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Radio.jsx", error: String((e && e.message) || e) }); }

// components/core/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Native select styled to brand, with label. */
function Select({
  label,
  id,
  children,
  options,
  style = {},
  wrapStyle = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const selId = id || (label ? `sel-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-sans)',
      ...wrapStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: selId,
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-heading)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selId,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: 'none',
      width: '100%',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--text-body)',
      padding: '9px 34px 9px 12px',
      height: 40,
      boxSizing: 'border-box',
      background: '#fff',
      borderRadius: 'var(--radius-sm)',
      cursor: 'pointer',
      border: `2px solid ${focus ? 'var(--accent)' : 'var(--border-strong)'}`,
      boxShadow: focus ? 'var(--shadow-focus)' : 'none',
      outline: 'none',
      ...style
    }
  }, rest), options ? options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value ?? o,
    value: o.value ?? o
  }, o.label ?? o)) : children), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 12,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--text-muted)',
      fontSize: 11
    }
  }, "\u25BE")));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Select.jsx", error: String((e && e.message) || e) }); }

// components/core/Switch.jsx
try { (() => {
/** Toggle switch. Turquoise track when on. No bounce. */
function Switch({
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  label,
  style = {}
}) {
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;
  const toggle = () => {
    if (disabled) return;
    if (!isControlled) setInternal(v => !v);
    onChange && onChange(!on);
  };
  const sw = /*#__PURE__*/React.createElement("span", {
    role: "switch",
    "aria-checked": on,
    onClick: toggle,
    style: {
      width: 40,
      height: 22,
      borderRadius: 'var(--radius-pill)',
      flex: 'none',
      background: on ? 'var(--accent)' : 'var(--border-strong)',
      position: 'relative',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'background var(--dur-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: on ? 20 : 2,
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: 'var(--shadow-sm)',
      transition: 'left var(--dur-base) var(--ease-standard)'
    }
  }));
  if (!label) return React.cloneElement(sw, {
    style: {
      ...sw.props.style,
      ...style
    }
  });
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--text-body)',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, sw, label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Switch.jsx", error: String((e && e.message) || e) }); }

// components/core/Tabs.jsx
try { (() => {
/** Underline tabs. Active tab shows Turquoise underline + heading colour. */
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  style = {}
}) {
  const [internal, setInternal] = React.useState(defaultValue ?? (tabs[0] && (tabs[0].value ?? tabs[0])));
  const isControlled = value !== undefined;
  const active = isControlled ? value : internal;
  const select = v => {
    if (!isControlled) setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      borderBottom: '1px solid var(--border-default)',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, tabs.map(t => {
    const v = t.value ?? t;
    const label = t.label ?? t;
    const on = v === active;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      type: "button",
      onClick: () => select(v),
      style: {
        border: 'none',
        background: 'none',
        cursor: 'pointer',
        padding: '10px 14px',
        fontSize: 14,
        fontWeight: on ? 700 : 500,
        fontFamily: 'var(--font-sans)',
        color: on ? 'var(--text-heading)' : 'var(--text-muted)',
        borderBottom: `2px solid ${on ? 'var(--accent)' : 'transparent'}`,
        marginBottom: -1,
        transition: 'color var(--dur-fast), border-color var(--dur-fast)'
      }
    }, label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
/** Tag / chip — for filters, keywords. Optional removable X. */
function Tag({
  children,
  onRemove,
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '4px 10px',
      fontSize: 13,
      fontWeight: 500,
      lineHeight: 1.4,
      fontFamily: 'var(--font-sans)',
      color: 'var(--text-heading)',
      background: '#fff',
      border: '2px solid var(--border-strong)',
      borderRadius: 'var(--radius-sm)',
      ...style
    }
  }, children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Remove",
    onClick: onRemove,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      border: 'none',
      background: 'none',
      padding: 0,
      cursor: 'pointer',
      color: hover ? 'var(--status-danger)' : 'var(--text-muted)',
      fontSize: 14,
      lineHeight: 1
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/core/Tooltip.jsx
try { (() => {
/** Hover tooltip. Cyprus bubble, appears on hover/focus. */
function Tooltip({
  label,
  placement = 'top',
  children,
  style = {}
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginBottom: 6
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginTop: 6
    },
    left: {
      right: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      marginRight: 6
    },
    right: {
      left: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      marginLeft: 6
    }
  }[placement] || {};
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false)
  }, children, show && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      ...pos,
      zIndex: 50,
      whiteSpace: 'nowrap',
      background: 'var(--at-cyprus)',
      color: '#fff',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 500,
      padding: '5px 9px',
      borderRadius: 'var(--radius-sm)',
      boxShadow: 'var(--shadow-md)',
      pointerEvents: 'none'
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tooltip.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/DashboardScreen.jsx
try { (() => {
/* AgencyTech dashboard — main Dashboard view (stats, activity, projects). */
function DashboardScreen() {
  const {
    Card,
    Badge,
    Button,
    Eyebrow,
    Avatar,
    Alert
  } = window.AgencyTechDesignSystem_abd4b2;
  const stats = [{
    label: 'Active projects',
    value: '18',
    delta: '+3',
    up: true,
    icon: 'folder-kanban'
  }, {
    label: 'Revenue (MTD)',
    value: '£142k',
    delta: '+12%',
    up: true,
    icon: 'trending-up'
  }, {
    label: 'Billable hours',
    value: '1,284',
    delta: '+64',
    up: true,
    icon: 'clock'
  }, {
    label: 'Overdue invoices',
    value: '3',
    delta: '-2',
    up: false,
    icon: 'receipt'
  }];
  const projects = [{
    name: 'Northwind rebrand',
    client: 'Northwind Co.',
    status: 'On track',
    tone: 'success',
    prog: 72
  }, {
    name: 'Helio app launch',
    client: 'Helio Ltd.',
    status: 'At risk',
    tone: 'warning',
    prog: 45
  }, {
    name: 'Meridian website',
    client: 'Meridian',
    status: 'On track',
    tone: 'success',
    prog: 88
  }, {
    name: 'Cobalt campaign',
    client: 'Cobalt Group',
    status: 'Blocked',
    tone: 'danger',
    prog: 20
  }];
  const activity = [{
    who: 'Tom Reyes',
    what: 'completed',
    obj: 'Homepage design',
    when: '12m ago'
  }, {
    who: 'Aisha Khan',
    what: 'commented on',
    obj: 'Helio launch plan',
    when: '1h ago'
  }, {
    who: 'Priya Shah',
    what: 'invoiced',
    obj: 'Meridian — £8,400',
    when: '3h ago'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      maxWidth: 1160
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Tuesday, 1 July"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '6px 0 0'
    }
  }, "Good Morning, Priya")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconLeft: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "plus",
      style: {
        width: 16,
        height: 16
      }
    })
  }, "New project")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 16
    }
  }, stats.map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.label,
    hoverable: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 36,
      height: 36,
      borderRadius: 'var(--radius-sm)',
      background: 'var(--status-info-bg)',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": s.icon,
    style: {
      width: 18,
      height: 18,
      color: 'var(--at-turquoise)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: s.up ? 'var(--status-success-strong)' : 'var(--status-danger-strong)'
    }
  }, s.delta)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      fontWeight: 800,
      color: 'var(--text-heading)',
      letterSpacing: '-0.02em',
      lineHeight: 1
    }
  }, s.value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)',
      marginTop: 6
    }
  }, s.label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr',
      gap: 16,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 20px',
      borderBottom: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0
    }
  }, "Active projects"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: 13,
      fontWeight: 600
    }
  }, "View all")), /*#__PURE__*/React.createElement("div", null, projects.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: p.name,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '14px 20px',
      borderBottom: i < projects.length - 1 ? '1px solid var(--border-default)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      color: 'var(--text-heading)',
      fontSize: 14
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, p.client)), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 120
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      background: 'var(--surface-subtle)',
      borderRadius: 999,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: p.prog + '%',
      height: '100%',
      background: 'var(--at-turquoise)'
    }
  }))), /*#__PURE__*/React.createElement(Badge, {
    tone: p.tone,
    dot: true
  }, p.status))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: '0 0 12px'
    }
  }, "Recent activity"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, activity.map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: a.who,
    size: 30
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      lineHeight: 1.45
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: 'var(--text-heading)'
    }
  }, a.who), ' ', /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, a.what), ' ', /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      color: 'var(--text-body)'
    }
  }, a.obj), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--text-faint, #8fa5a5)',
      marginTop: 2
    }
  }, a.when)))))), /*#__PURE__*/React.createElement(Alert, {
    tone: "warning",
    title: "3 invoices overdue"
  }, "Chase Cobalt Group \u2014 \xA38,400 outstanding."))));
}
window.DashboardScreen = DashboardScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/DashboardScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/LoginScreen.jsx
try { (() => {
/* AgencyTech dashboard — Login screen. Cyprus brand panel + form. */
function LoginScreen({
  onLogin
}) {
  const {
    Button,
    Input,
    Checkbox
  } = window.AgencyTechDesignSystem_abd4b2;
  const submit = e => {
    e.preventDefault();
    onLogin();
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: '100%',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 45%',
      background: 'var(--at-cyprus)',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: 48,
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/blob-scene-2.svg",
    alt: "",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo_linear_dark.png",
    alt: "AgencyTech",
    style: {
      height: 22,
      alignSelf: 'flex-start',
      position: 'relative'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      color: '#fff',
      fontSize: 34,
      lineHeight: 1.15,
      maxWidth: 400,
      margin: 0
    }
  }, "Run every client project from one place."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,0.82)',
      fontSize: 16,
      maxWidth: 380,
      margin: '18px 0 0'
    }
  }, "Projects, invoicing and reporting \u2014 clear, consistent, and built for agencies.")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'rgba(255,255,255,0.6)',
      position: 'relative'
    }
  }, "\xA9 2026 AgencyTech")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 55%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#fff',
      padding: 32
    }
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      width: 340,
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0
    }
  }, "Sign In"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      color: 'var(--text-muted)',
      fontSize: 14
    }
  }, "Welcome back. Please enter your details.")), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    defaultValue: "priya@agencytech.co.uk"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Password",
    type: "password",
    defaultValue: "password"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Remember me",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: 13,
      fontWeight: 600
    }
  }, "Forgot password?")), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "primary",
    fullWidth: true,
    size: "lg"
  }, "Sign in"), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      fontSize: 13,
      color: 'var(--text-muted)',
      margin: 0
    }
  }, "New to AgencyTech? ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontWeight: 600
    }
  }, "Create an account")))));
}
window.LoginScreen = LoginScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/LoginScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/PlaceholderScreen.jsx
try { (() => {
/* AgencyTech dashboard — generic placeholder view for secondary nav items. */
function PlaceholderScreen({
  title,
  icon
}) {
  const {
    Button
  } = window.AgencyTechDesignSystem_abd4b2;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      maxWidth: 1160
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      marginBottom: 16
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px dashed var(--border-strong)',
      borderRadius: 'var(--radius-md)',
      background: 'var(--surface-subtle)',
      padding: 48,
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 52,
      height: 52,
      borderRadius: 'var(--radius-md)',
      background: '#fff',
      border: '1px solid var(--border-default)',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: 24,
      height: 24,
      color: 'var(--at-turquoise)'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0
    }
  }, title, " coming soon"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      color: 'var(--text-muted)',
      fontSize: 14
    }
  }, "This view is part of the AgencyTech UI kit demo.")), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm"
  }, "Learn more")));
}
window.PlaceholderScreen = PlaceholderScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/PlaceholderScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/Sidebar.jsx
try { (() => {
/* AgencyTech dashboard — Sidebar navigation.
   Cyprus surface, Turquoise-light active state. Requires bundle + Lucide on page. */
function Sidebar({
  active,
  onNavigate,
  collapsed
}) {
  const items = [{
    id: 'dashboard',
    label: 'Dashboard',
    icon: 'layout-dashboard'
  }, {
    id: 'projects',
    label: 'Projects',
    icon: 'folder-kanban'
  }, {
    id: 'clients',
    label: 'Clients',
    icon: 'users'
  }, {
    id: 'invoices',
    label: 'Invoices',
    icon: 'receipt'
  }, {
    id: 'reports',
    label: 'Reports',
    icon: 'bar-chart-3'
  }];
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: collapsed ? 72 : 232,
      flex: 'none',
      background: 'var(--at-cyprus)',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      transition: 'width var(--dur-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '18px 18px 22px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/icon_dark_badge.png",
    alt: "AgencyTech",
    style: {
      width: 34,
      height: 34,
      flex: 'none'
    }
  }), !collapsed && /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo_linear_light.png",
    alt: "AgencyTech",
    style: {
      height: 18
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      padding: '0 12px',
      flex: 1
    }
  }, items.map(it => {
    const on = active === it.id;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      type: "button",
      onClick: () => onNavigate(it.id),
      title: it.label,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '10px 12px',
        border: 'none',
        cursor: 'pointer',
        borderRadius: 'var(--radius-sm)',
        background: on ? 'var(--at-cyprus-light)' : 'transparent',
        color: on ? 'var(--at-turquoise-light)' : 'rgba(255,255,255,0.72)',
        fontFamily: 'var(--font-sans)',
        fontSize: 14,
        fontWeight: on ? 700 : 500,
        justifyContent: collapsed ? 'center' : 'flex-start',
        transition: 'background var(--dur-fast), color var(--dur-fast)'
      }
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": it.icon,
      style: {
        width: 18,
        height: 18,
        flex: 'none'
      }
    }), !collapsed && it.label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 12,
      borderTop: '1px solid rgba(255,255,255,0.12)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    title: "Help & support",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '10px 12px',
      width: '100%',
      border: 'none',
      cursor: 'pointer',
      borderRadius: 'var(--radius-sm)',
      background: 'transparent',
      color: 'rgba(255,255,255,0.72)',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      fontWeight: 500,
      justifyContent: collapsed ? 'center' : 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "life-buoy",
    style: {
      width: 18,
      height: 18,
      flex: 'none'
    }
  }), !collapsed && 'Help & support')));
}
window.Sidebar = Sidebar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/Topbar.jsx
try { (() => {
/* AgencyTech dashboard — Topbar. Search, notifications, avatar. */
function Topbar({
  title,
  onToggleSidebar,
  onLogout
}) {
  const {
    IconButton,
    Avatar,
    Badge
  } = window.AgencyTechDesignSystem_abd4b2;
  const [menu, setMenu] = React.useState(false);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '0 24px',
      height: 64,
      background: '#fff',
      borderBottom: '1px solid var(--border-default)',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Toggle menu",
    variant: "ghost",
    onClick: onToggleSidebar
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "panel-left",
    style: {
      width: 18,
      height: 18
    }
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 18,
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 260
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "search",
    style: {
      position: 'absolute',
      left: 12,
      top: '50%',
      transform: 'translateY(-50%)',
      width: 16,
      height: 16,
      color: 'var(--text-muted)'
    }
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "Search\u2026",
    style: {
      width: '100%',
      boxSizing: 'border-box',
      height: 38,
      padding: '0 12px 0 36px',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--text-body)',
      background: 'var(--surface-subtle)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-sm)',
      outline: 'none'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Notifications",
    variant: "ghost"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "bell",
    style: {
      width: 18,
      height: 18
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 6,
      right: 6,
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--status-danger)',
      border: '2px solid #fff'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setMenu(m => !m),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Priya Shah",
    size: 36
  }), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevron-down",
    style: {
      width: 16,
      height: 16,
      color: 'var(--text-muted)'
    }
  })), menu && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 0,
      top: 46,
      width: 200,
      background: '#fff',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-lg)',
      padding: 6,
      zIndex: 60
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 10px',
      borderBottom: '1px solid var(--border-default)',
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14,
      color: 'var(--text-heading)'
    }
  }, "Priya Shah"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, "priya@agencytech.co.uk")), ['Profile', 'Settings', 'Billing'].map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: '8px 10px',
      fontSize: 14,
      borderRadius: 'var(--radius-sm)',
      cursor: 'pointer',
      color: 'var(--text-body)'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'var(--surface-subtle)',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent'
  }, i)), /*#__PURE__*/React.createElement("div", {
    onClick: onLogout,
    style: {
      padding: '8px 10px',
      fontSize: 14,
      borderRadius: 'var(--radius-sm)',
      cursor: 'pointer',
      color: 'var(--status-danger)',
      borderTop: '1px solid var(--border-default)',
      marginTop: 4
    },
    onMouseEnter: e => e.currentTarget.style.background = 'var(--status-danger-bg)',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent'
  }, "Sign out"))));
}
window.Topbar = Topbar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/Topbar.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Tooltip = __ds_scope.Tooltip;

})();
